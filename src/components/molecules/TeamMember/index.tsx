import SanityImage from "@/components/atoms/SanityImage";
import { TeamMember } from "@/types/sanityTypes";
import { RichTextViewer } from "../RichTextViewer";

interface TeamMemberProps {
    data: TeamMember
}

const TeamMembers = ({data}: TeamMemberProps) => {
    return (
        <div className="p-4 lg:w-1/3 flex flex-col items-center flex-wrap gap-5 border justify-center">
            <div className="w-2/4 flex justify-center rounded-full aspect-square relative overflow-hidden">
                {data.image && (
                    <SanityImage src={data.image} alt={data.fullName}/>
                )}
            </div>
            <div className="text-center">
                <p>{data.fullName}</p>
                <RichTextViewer value={data.intro}></RichTextViewer>
                <p>{data.email}</p>
            </div>

        </div>
    )
};

export default TeamMembers;