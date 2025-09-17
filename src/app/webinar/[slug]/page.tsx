import ScrollUp from "@/components/Common/ScrollUp";
import { RichTextViewer } from "@/components/molecules/RichTextViewer";
import { getIndividualWebinar } from "@/sanity/client";
import { Webinar } from "@/types/sanityTypes";
import { formatDateWithoutTime } from "@/utils/formatDate";


export const revalidate = 0

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const webinar:Webinar = await getIndividualWebinar(slug);
    
    if(!webinar){
        return <>Loading...</>
    }

    return (
        <div className="py-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
            <ScrollUp />
            <div className="container">
                <h1 className="text-5xl font-bold mb-5">{webinar.title}</h1>
                <div className="flex italic gap-1">
                    <p>Date:</p>
                    {webinar.date && (
                        <p className="italic">{formatDateWithoutTime(webinar.date)}</p>
                    )}
                </div>
                <div className="flex italic gap-1">
                    <p>Time:</p>
                    <p className="italic">{webinar.startTime} to {webinar.endTime}</p>
                </div>
                <hr className="my-12"/>

                <RichTextViewer value={webinar.body} />
        
            </div>
        </div>
    )
}