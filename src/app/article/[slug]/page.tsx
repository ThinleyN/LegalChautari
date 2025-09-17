import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import { RichTextViewer } from "@/components/molecules/RichTextViewer";
import { getArticle } from "@/sanity/client";
import { Article } from "@/types/sanityTypes";
import { formatDate } from "@/utils/formatDate";
import { PortableText } from '@portabletext/react'


export const revalidate = 0

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const article:Article = await getArticle(slug);
    
    if(!article){
        return <>Loading...</>
    }

    return (
        <>
        {/* <Breadcrumb
            pageName="Article"
            description={article.title} 
        /> */}
        <div className="bg-white py-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
            <ScrollUp />
            <div className="container">
                <h1 className="text-5xl font-bold mb-5">{article.title}</h1>
                <p className="italic">{formatDate(article.publishedAt)}</p>
                <hr className="my-12"/>

                <RichTextViewer value={article.body} />
        
            </div>
        </div>
        </>
    )
}