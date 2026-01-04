"use client";

import { useState, useEffect } from "react";
import {
  Download,
  X,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Sparkles,
} from "lucide-react";
import Social from "../components/Social";
import Image from "next/image";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  // Generate stars on mount
  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
    };
    setStars(generateStars());
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        {/* Animated Starfield Background */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs with Parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float-delayed"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
              transition: "transform 0.3s ease-out",
              animationDuration: "8s",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out ${
                  Math.random() * 5
                }s infinite`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Content Container */}
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left animate-fadeIn">
              {/* Badge with micro-interaction */}
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm hover:bg-indigo-500/20 hover:scale-105 transition-all duration-300 cursor-default group">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                <Sparkles className="w-3 h-3 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm text-indigo-300 font-medium">
                  Available for Ministry
                </span>
              </div> */}

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl text-indigo-400 font-medium tracking-wide hover:tracking-wider transition-all duration-300">
                  Pastor & Worshipper
                </h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hello, I am
                  <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Arif Sabir
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A humorous and generous person, dedicated to creating a relaxed,
                healthy atmosphere wherever I go. Spreading joy through worship
                and service.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-6">
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 active:scale-95"
                >
                  <span className="relative flex items-center gap-3 z-10">
                    Request CV
                    <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5 group-hover:rotate-12" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-white/20 blur-xl animate-pulse" />
                  </div>
                </button>
                <Social containerStyles="flex gap-6 text-2xl" />
              </div>

              {/* Social Links with micro-interactions */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
                <span className="text-sm text-slate-400">Connect with me:</span>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      color:
                        "hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400",
                    },
                    {
                      icon: Twitter,
                      label: "Twitter",
                      color:
                        "hover:bg-sky-500/10 hover:border-sky-500 hover:text-sky-400",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      color:
                        "hover:bg-pink-500/10 hover:border-pink-500 hover:text-pink-400",
                    },
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      aria-label={social.label}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-90 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div
              className="flex justify-center lg:justify-end animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative group">
                {/* Glowing Ring Effect with rotation */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-spin-slow" />

                {/* Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl hover:border-indigo-500/50 transition-all duration-500">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/heroimage.png"
                    alt="Arif Sabir - Pastor & Worshipper"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Badge with bounce */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-900 border border-indigo-500/30 rounded-full shadow-xl backdrop-blur-sm hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 animate-pulse"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      />
                      <div
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      />
                    </div>
                    <span className="text-sm text-slate-300 font-medium">
                      Inspiring Thousands
                    </span>
                  </div>
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[0, 120, 240].map((angle, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-indigo-400 rounded-full"
                      style={{
                        animation: `orbit 8s linear infinite`,
                        animationDelay: `${i * 2.67}s`,
                        transformOrigin: "0 0",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section with hover effects */}
          {/* Quotes Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-32 max-w-5xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                quote:
                  "Worship is not about the music, it's about the heart posture before God.",
                author: "Inspiring Others",
              },
              {
                quote:
                  "In every note and every word, let grace flow like a river.",
                author: "Ministry Philosophy",
              },
              {
                quote:
                  "The most powerful worship comes from a heart that knows it's been forgiven.",
                author: "Core Belief",
              },
              {
                quote:
                  "When we lift our voices together, heaven touches earth.",
                author: "Community Vision",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group text-left p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-indigo-400/20 mb-4 group-hover:scale-110 transition-transform duration-300 leading-none"></div>
                <div className="text-lg md:text-xl text-slate-300 mb-4 group-hover:text-white transition-colors duration-300 italic leading-relaxed">
                  &quot; {item.quote} &quot;
                </div>
                <div className="text-sm text-indigo-400 group-hover:text-violet-300 transition-colors duration-300 font-medium">
                  — {item.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CV Request Modal with enhanced animations */}
        {isDialogOpen && (
          <div
            onClick={() => setIsDialogOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scaleIn"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 hover:rotate-90 transition-all duration-300 active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon with pulse */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center animate-pulse-gentle relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                <Download className="w-8 h-8 text-white relative z-10" />
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-white">Request CV</h2>
                <p className="text-slate-400 leading-relaxed">
                  My CV is provided upon request. Please reach out and share the
                  purpose of your inquiry.
                </p>

                <div className="pt-6 space-y-3">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg hover:shadow-indigo-500/50">
                    Go to Contact Page
                  </button>
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="w-full px-6 py-4 border-2 border-slate-700 text-slate-300 rounded-xl font-medium hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 active:scale-95"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(20px) translateX(-10px);
          }
          50% {
            transform: translateY(10px) translateX(10px);
          }
          75% {
            transform: translateY(30px) translateX(-5px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(250px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(250px) rotate(-360deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(99, 102, 241, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default Home;
