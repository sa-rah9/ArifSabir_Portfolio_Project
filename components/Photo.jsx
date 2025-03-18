"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Image Positioned within the Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[465px] xl:h-[465px] rounded-full overflow-hidden"
        >
          <Image
            src="/assets/photo1.jpg"
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-cover"
          />
        </motion.div>

        {/* Animated Circles */}
        <motion.svg
          className="w-[300px] xl:w-[465px] h-[300px] xl:h-[465px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Yellow stroke */}
          <motion.circle
          className={"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"}
            cx="253"
            cy="253"
            r="250"
            stroke="#FFEA00"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* White stroke */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
