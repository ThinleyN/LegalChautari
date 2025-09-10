import { Internship } from "@/types/sanityTypes";
import Link from "next/link";
import SanityImage from "../SanityImage";


interface InternshipProps {
    data: Internship
}

const InternshipPreview: React.FC<InternshipProps> = ({ data }) => {
    const {_id, title, image, shortDescription, slug} = data;
    return (
        <div 
        // href={`/internship/${slug?.current}`} 
        className="w-full lg:w-1/3 group duration-300 transition-all hover:scale-[1.02] cursor-pointer">
            <div className="h-72 w-full relative">
                <SanityImage src={image} alt={title}/>
            </div>
            <h3 className="text-xl my-2 font-bold group-hover:underline">{title}</h3>
            <span className="text-gray">{shortDescription}</span>
        </div>
    );
};

export default InternshipPreview;
