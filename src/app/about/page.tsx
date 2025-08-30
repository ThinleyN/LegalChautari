import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MeetTheTeam from "@/components/organisms/MeetTheTeam";
import VisionMission from "@/components/organisms/VisionMission";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page",
  // other metadata
};

export const revalidate = 0;

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
