import { Article } from "@/types/sanityTypes";
import SanityImage from "../atoms/SanityImage";
import Link from "next/link";


interface ArticleProps {
    data: Article
}

const ArticlePreview: React.FC<ArticleProps> = ({ data }) => {
    const {_id, title, body, image, excerpt, slug} = data;
    return (
        <Link href={`/article/${slug?.current}`} className="w-full lg:w-[30%] group duration-300 transition-all hover:scale-[1.02] cursor-pointer mb-3 md:mb-0">
            <div className="h-72 w-full relative">
                <SanityImage src={image} alt={title}/>
            </div>
            <h3 className="my-2 font-bold text-2xl group-hover:underline">{title}</h3>
            <span className="text-gray">{excerpt}</span>
        </Link>
    );
};

export default ArticlePreview;
