"use client"

import { FiDownload } from "react-icons/fi";
import { LiaCrossSolid } from "react-icons/lia";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Instruments from "../components/Instruments";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head"; // Import Head for SEO tags

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Toggle dialog box on click
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  return (
    <main>
      <Head>
        <title>Arif Sabir - Pastor & Worshipper</title>
        <meta name="description" content="Discover the profile of Arif Sabir, a devoted Pastor and Worshipper known for creating a relaxed, healthy atmosphere. Explore his work and personal insights." />
        <meta name="keywords" content="Arif Sabir, Pastor, Worshipper, Spiritual Leader, Christian Ministry" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Arif Sabir - Pastor & Worshipper" />
        <meta property="og:description" content="Discover the profile of Arif Sabir, a devoted Pastor and Worshipper known for creating a relaxed, healthy atmosphere. Explore his work and personal insights." />
        <meta property="og:image" content="https://i0.wp.com/www.evertonparkchurch.com.au/wp-content/uploads/2016/01/1601-Worshipping_God_B_web.jpg?w=1153&ssl=1" /> {/* Update with actual image URL */}
        <meta property="og:url" content="https://www.arifsabir.com" /> {/* Update with actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arif Sabir's Portfolio" />
      </Head>

      <section className="h-full">
        {/* Container for the entire page */}
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24">
            {/* Left Side Content */}
            <article className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="text-5xl xl:text-6xl font-bold">Pastor / Worshipper</h1>
              <div className="flex justify-center xl:justify-start items-center gap-4 mt-5 xl:text-6xl text-4xl">
                <span>Hello, I&apos;m</span>
                <span className="text-[#FFEA00]">ARIF</span>
                <LiaCrossSolid aria-label="Cross Icon" />
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
                  <FiDownload className="text-xl" aria-label="Download Icon" />
                </button>
                <Social containerStyles="flex gap-6 text-2xl" />
              </div>
            </article>
            {/* Right Side Photo */}
            <aside className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo alt="Profile Picture of Arif" />
            </aside>
          </div>
        </div>

        {/* Instruments Component */}
        <Instruments />

        {/* Dialog Box with Framer Motion */}
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white/95 text-black p-8 rounded-xl shadow-xl max-w-lg w-full relative">
              <h2 className="text-3xl font-semibold mb-4">CV Request</h2>
              <p className="text-xl mb-6">
                The CV will be provided upon request. Please reach out for more details.
                Follow the link and tell the purpose why you want the CV.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" legacyBehavior>
                  <a className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                    Go to Contact Page
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Home;
