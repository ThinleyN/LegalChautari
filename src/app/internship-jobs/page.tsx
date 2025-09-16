import Breadcrumb from "@/components/Common/Breadcrumb";
import { InternshipList } from "@/components/molecules/InternshipList";
import { InternshipSidebar } from "@/components/molecules/InternshipSidebar";
import { getInternships, getJobLocation } from "@/sanity/client";

const InternshipJobsPage = async () => {

    const  fetchJobInformation = async () => {
        const res = await getJobLocation();
        return res;
    }

    const jobInfo = await fetchJobInformation();

    const fetchJobs = async () => {
        const res = await getInternships();
        return res;
    }

    const internships = await fetchJobs();

    return (
        <>
          <Breadcrumb
            pageName="Internship & Jobs"
            description=""
            />
            <div className="container pb-24 flex">
                <InternshipSidebar employers={jobInfo.employers} locations={jobInfo.location} industries={jobInfo.industries} />
                <InternshipList internships={internships} />
            </div>
        </>

    )
}

export default InternshipJobsPage;