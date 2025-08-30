import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import InternshipOfTheWeek from "@/components/InternshipOfTheWeek";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export const metadata: Metadata = {
  title: "Legal Chautari",
  description: "Connect. Learn. Lead.",
  // other metadata
};

export const revalidate = 0;

export default async function Home() {

  return (
    <>
      <ScrollUp />
      <Hero />
      <LatestArticles />
      <InternshipOfTheWeek />
      <UpcomingWebinars />


      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
