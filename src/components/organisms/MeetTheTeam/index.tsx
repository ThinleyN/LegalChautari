import TeamMember from "@/components/molecules/TeamMember";
import { getTeamMembers } from "@/sanity/client";

const MeetTheTeam = async () => {
    const teamMembers = await getTeamMembers();
    return (
        <div className="container pb-16">
            <h2>Meet the Team</h2>
            <div>
                <h3>Founders</h3>
                <div className="flex">
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