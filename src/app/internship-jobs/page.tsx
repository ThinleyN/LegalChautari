"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import { InternshipList } from "@/components/molecules/InternshipList";
import { InternshipSidebar } from "@/components/molecules/InternshipSidebar";
import axios from "axios";
import { useEffect, useState } from "react";

const InternshipJobsPage = () => {

    const [jobInfo, setJobInfo] = useState({
        location: [],
        employers: [],
        industries: []
    } as {
        location: string[];
        employers: any;
        industries: any;
    });
    const [jobs, setJobs] = useState([] as any);
    const [filter, setFilter] = useState({
        sector: [
        
        ],
        employer: [],
        location: []
    } as any);
    const [loading, setLoading] = useState(true as boolean);

    const  fetchJobInformation = async () => {
        const res = await axios.get('/api/getJobLocationSectorAndEmployers' );
        setJobInfo(res.data);
        return res;
    }

    useEffect(() => {
        fetchJobInformation();
        fetchJobs()
    },[])


    const fetchJobs = async () => {
        setLoading(true);
        const res = await axios.post('/api/get-internships-with-filter', filter);
        setJobs(res.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    },[filter.sector, filter.employer, filter.location])

    return (
        <>
          <Breadcrumb
            pageName="Internship & Jobs"
            description=""
            />
            <div className="container pt-12 pb-24 flex">
                <InternshipSidebar 
                    filter={filter}
                    setFilter={setFilter}
                    employers={jobInfo.employers} 
                    locations={jobInfo.location} 
                    industries={jobInfo.industries} 
                />
                <InternshipList internships={jobs} loading={loading} />
            </div>
        </>

    )
}

export default InternshipJobsPage;