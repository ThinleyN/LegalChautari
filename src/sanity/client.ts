// sanity.js
import { Article, Internship, TeamMember, Webinar } from '@/types/sanityTypes';
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: '772dz3bs',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  // Set default headers to be included with all requests
  headers: {
    'X-Custom-Header': 'custom-value'
  },
  apiVersion: '2025-02-06', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content, accessing drafts or using draft perspectives
})

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getArticles() {
  const articles:Article[] = await client.fetch('*[_type == "article"]')
  return articles;
}

export async function getFeaturedArticle() {
  const documents = await client.fetch(  `*[_type == "featuredArticles"]{
    items[]->{
      _id,
      title,
      slug,
      description,
      image,
      publishedAt,
      excerpt,
      body
      // add any other fields you need from the article
    }
  }`);

  return documents[0].items as Article[];
}

export async function getArticle(slug:string) {
  const article: Article= await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );
  return article;
}

// export async function getInternships() {
//   const internships: Internship[] = await client.fetch('*[_type == "internship"]')
//   return internships;
// }

export async function getInternshipDefault() {
  const query = `
  *[_type == "internship" && !(_id in path('drafts.**'))]
  | order(publishedAt desc) {
    ...,                                   // ← all fields as-is
    "slug": slug.current,                  // flatten slug
    "industry": industry->{
      _id, title, "value": coalesce(value.current, slug.current, _id)
    },
    "employer": employer->{
      _id, title, "value": coalesce(value.current, slug.current, _id)
    },
    image{
      ..., "url": asset->url               // quick CDN URL (optional)
    }
  }`;
  return client.fetch(query);
}

type InternshipFilters = {
  sector?: string | string[];    // e.g. "tech" or ["tech","finance"]
  employer?: string | string[];  // e.g. "google" or ["google","meta"]
  location?: string | string[];  // e.g. "london" or ["london","remote"]
};

export async function getInternships(filters: InternshipFilters = {}) {
  const toArray = (v?: string | string[]) =>
    Array.isArray(v) ? v : v ? [v] : undefined;

  const sectors = toArray(filters.sector);
  const employers = toArray(filters.employer);
  const locations = toArray(filters.location);

  if(!sectors?.length && !employers?.length && !locations?.length){
    const res = getInternshipDefault();
    return res;
  }

  const query = `
  *[
    _type == "internship" 
    && !(_id in path('drafts.**'))

    // sector filter (industry by slug/value/title)
    && (
      count($sectors) == 0 ||
      coalesce(industry->slug.current, "") in $sectors ||
      coalesce(industry->value.current, "") in $sectors ||
      lower(coalesce(industry->title, "")) in $sectorsLower
    )

    // employer filter (employer by slug/value/title)
    && (
      count($employers) == 0 ||
      coalesce(employer->slug.current, "") in $employers ||
      coalesce(employer->value.current, "") in $employers ||
      lower(coalesce(employer->value.current, "")) in $employersLower
    )

    // location filter (exact or starts-with)
    && (
      count($locationsLower) == 0 ||
      lower(coalesce(location, "")) in $locationsLower ||
      count($locationsLower[ lower(coalesce(^.location, "")) match @ + "*" ]) > 0
    )
  ]
  | order(publishedAt desc) {
    ...,
    "slug": slug.current,
    "industry": industry->{
      _id, title, "value": coalesce(value.current, slug.current, _id)
    },
    "employer": employer->{
      _id, title, "value": coalesce(value.current, slug.current, _id)
    },
    image{ ..., "url": asset->url }
  }`;

  const params = {
    sectors,
    employers,
    locations,
    sectorsLower: sectors?.map(s => s.toLowerCase()),
    employersLower: employers?.map(e => e.toLowerCase()),
    locationsLower: locations?.map(l => l.toLowerCase()),
  };

  return client.fetch(query, params);
}



export async function getTeamMembers() {
  const teamMembers: TeamMember[] =  await client.fetch('*[_type == "teamMember"]');
  return teamMembers;
}

export async function getWebinar() {
  const webinars: Webinar[] =  await client.fetch('*[_type == "webinar"]');
  return webinars;
}

export async function getIndividualWebinar(slug:string) {
  const article: Webinar = await client.fetch(
    `*[_type == "webinar" && slug.current == $slug][0]`,
    { slug }
  );
  return article;
}

export async function getJobLocationSectorAndEmployers() {
  const query = `
    array::unique(*[_type == "internship" && defined(location)].location)
    | order(@ asc)
  `;
  const location = await client.fetch<string[]>(query);

  const sectorAndEmployerQuery = `
  {
    "industries": *[
      _type == "statusOption"
      && !(_id in path('drafts.**'))
      && count(*[
        _type == "internship"
        && !(_id in path('drafts.**'))
        && defined(industry) 
        && industry._ref == ^._id
      ]) > 0
    ]
    | order(title asc){
      _id,
      title,
      "value": coalesce(value.current, slug.current, _id),
      "count": count(*[
        _type == "internship" 
        && !(_id in path('drafts.**')) 
        && industry._ref == ^._id
      ])
    },
  
    "employers": *[
      _type == "statusOption"
      && !(_id in path('drafts.**'))
      && count(*[
        _type == "internship"
        && !(_id in path('drafts.**'))
        && defined(employer) 
        && employer._ref == ^._id
      ]) > 0
    ]
    | order(title asc){
      _id,
      title,
      "value": coalesce(value.current, slug.current, _id),
      "count": count(*[
        _type == "internship" 
        && !(_id in path('drafts.**')) 
        && employer._ref == ^._id
      ])
    }
  }
  
  `;
  const sectoreAndEmployer = await client.fetch(sectorAndEmployerQuery);

  return {location, employers: sectoreAndEmployer.employers, industries: sectoreAndEmployer.industries};
}

