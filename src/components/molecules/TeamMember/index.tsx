import SanityImage from "@/components/atoms/SanityImage";
import { TeamMember } from "@/types/sanityTypes";

interface TeamMemberProps {
    data: TeamMember
}

const TeamMember = ({data}: TeamMemberProps) => {
    console.log(data,"Dataa")
    return (
        <div className="w-1/3 flex flex-wrap gap-3 border justify-center">
            <div className="w-2/4 flex justify-center rounded-full aspect-square relative overflow-hidden">
                <SanityImage src={data.image} alt={data.fullName}/>
            </div>

        </div>
    )
};

export default TeamMember;