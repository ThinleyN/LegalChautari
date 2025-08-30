import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MeetTheTeam from "@/components/organisms/MeetTheTeam";
import VisionMission from "@/components/organisms/VisionMission";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Legal Chautari is a knowledge-sharing and community paltform bridging legal education and practice."
      />
    <VisionMission />
    <MeetTheTeam />
    </>
  );
};

export default AboutPage;
