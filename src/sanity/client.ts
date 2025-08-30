// sanity.js
import { Article, Internship, TeamMember } from '@/types/sanityTypes';
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

export async function getArticle(slug:string) {
  const article: Article= await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]`,
    { slug }
  );
  return article;
}

export async function getInternships() {
  const internships: Internship[] = await client.fetch('*[_type == "internship"]')
  return internships;
}

export async function getTeamMembers() {
  const teamMembers: TeamMember[] =  await client.fetch('*[_type == "teamMember"]');
  return teamMembers;
}


