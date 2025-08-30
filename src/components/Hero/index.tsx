import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="landing-bg relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] min-h-[400px]"
      >
        <div className="container z-[50] relative">
          <div className="text-white">
            <h1 className="text-7xl mb-24 font-bold">
              Legal Chautari
            </h1>
            <p className="mb-24 text-2xl">Welcome to Legal Chautari, Nepal's digital legal hub for students and professionals.</p>
            <p className="font-bold">Connect. Learn. Lead.</p>
          </div>
        </div>
        <Image src={'/images/landing.jpg'} fill className="absolute top-0 left-0 object-cover pt-[80px] brightness-50" alt="landing-img" />
      </section>
    </>
  );
};

export default Hero;
