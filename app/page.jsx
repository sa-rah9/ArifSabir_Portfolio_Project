"use client"
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import { LiaCrossSolid } from "react-icons/lia";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Instruments from "../components/Instruments";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Toggle dialog box on click
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  // Close dialog box
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="h-full">
      {/* <Particle /> Uncomment if using particles */} 
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
          {/* Left Side Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-5xl xl:text-6xl font-bold">Pastor / Worshipper</h1>
            <div className="flex justify-center xl:justify-start items-center gap-4 mt-5 xl:text-6xl text-4xl">
              <span>Hello, I&apos;m</span> {/* Escaping single quote */}
              <span className="text-[#FFEA00]">ARIF</span>
              <LiaCrossSolid />
            </div>
            <p className="max-w-md mt-6 text-white/80 text-3xl">
              I am a humorous and generous person, who always brings a relaxed, healthy atmosphere wherever I go.
            </p>
            {/* CTA Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-8">
              <button
                onClick={handleDialogOpen}
                className="text-[#FFEA00] uppercase flex items-center gap-2 border border-[#FFEA00] px-6 py-3 rounded-lg text-lg hover:bg-[#FFEA00] hover:text-black transition"
              >
                Request CV
                <FiDownload className="text-xl" />
              </button>
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

      {/* Dialog Box with Framer Motion */}
      {isDialogOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Animation: fade in and scale up
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
        >
          <div className="bg-white/95 text-black p-8 rounded-xl shadow-xl max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={handleDialogClose}
            >
              &times;
            </button>
            <h2 className="text-3xl font-semibold mb-4">CV Request</h2>
            <p className="text-2xl mb-6">
              The CV will be provided upon request. Please reach out for more details.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleDialogClose}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
