import TeamMember from "@/components/molecules/TeamMember";
import { getTeamMembers } from "@/sanity/client";

const MeetTheTeam = async () => {
    const teamMembers = await getTeamMembers();
    return (
        <div className="container pb-16">
            <h2 className="text-4xl font-bold mb-5">Meet the Team</h2>
            <div>
                <h3 className="text-xl">Founders</h3>
                <div className="flex gap-8 mt-4">
                    {teamMembers.map(item => {
                        return(
                            <TeamMember data={item} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default MeetTheTeam;