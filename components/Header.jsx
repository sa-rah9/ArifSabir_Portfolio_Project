"use client";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { GiPeaceDove } from "react-icons/gi";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Toggle dialog box on click
  const handleBibleClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  // Close dialog box
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link href="/" aria-label="Home">
          <div className="flex items-center cursor-pointer">
            <GiPeaceDove className="text-7xl mr-2" aria-hidden="true" /> {/* Icon */}
            <h1 className="xl:text-4xl text-3xl font-semibold hover:text-[#FFEA00] transition duration-300">
              ARIF SABIR
              <span className="text-[#FFEA00] text-5xl">.</span>
            </h1>
          </div>
        </Link>

        {/* Bible Image for mobile with click event */}
        <div className="xl:hidden">
          <Image
            src="/assets/bible2.png"
            alt="Bible icon"
            width={40}
            height={40}
            priority
            className="hover:opacity-80 transition duration-300 cursor-pointer"
            onClick={handleBibleClick}
          />
        </div>

        {/* Desktop Navigation & Bible Image */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          {/* Bible Image with click event */}
          <div className="relative">
            <Image
              src="/assets/bible2.png"
              alt="Bible icon"
              width={50}
              height={50}
              priority
              className="hover:opacity-80 transition duration-300 cursor-pointer"
              onClick={handleBibleClick}
            />
          </div>
        </div>

        {/* Mobile Navigation with Bible Icon */}
        <div className="xl:hidden flex items-center gap-4">
          <MobileNav />
        </div>
      </div>

      {/* Pop-up Dialog with Framer Motion */}
      {isDialogOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animation state
          exit={{ opacity: 0, scale: 0.8 }} // Exit animation
          transition={{ duration: 0.3 }} // Duration of the animation
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
        >
          <div className="bg-gradient-to-r from-white via-gray-100 to-white text-black p-10 rounded-xl shadow-2xl max-w-xl w-full relative transform transition-transform">
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={handleCloseDialog}
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
              Preaching YouTube Channel
            </h2>
            <p className="text-2xl mb-8 text-center">
              Follow us for more inspiring and spiritual videos.
            </p>
            <div className="flex justify-center">
              <Link href="https://www.youtube.com/@zindgikiroti5018" legacyBehavior>
                <a
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
