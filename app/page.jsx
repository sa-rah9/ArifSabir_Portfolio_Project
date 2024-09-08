import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import { LiaCrossSolid } from "react-icons/lia";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Instruments from "../components/Instruments";

const Home = () => {
  return (
    <section className="h-full">
      {/* <Particle /> Uncomment if using particles */} 
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
          {/* Left Side Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-5xl xl:text-6xl font-bold">Pastor / Worshipper</h1>
            <div className="flex justify-center xl:justify-start items-center gap-4 mt-5 xl:text-6xl text-5xl">
              <span>Hello, I&apos;m</span> {/* Escaping single quote */}
              <span className="text-[#FFEA00]">ARIF</span>
              <LiaCrossSolid />
            </div>
            <p className="max-w-md mt-6 text-white/80 text-3xl">
              I am a humorous and generous person, who always brings a relaxed, healthy atmosphere wherever I go.
            </p>
            {/* CTA Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-8">
              <a href="/cv.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[#FFEA00] uppercase flex items-center gap-2 border"
                >
                  Download CV
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Social containerStyles="flex gap-6 text-2xl" />
            </div>
          </div>
          {/* Right Side Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Instruments Component */}
      <Instruments />
    </section>
  );
};

export default Home;
