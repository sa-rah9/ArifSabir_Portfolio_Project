"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Image as ImageIcon,
  Mail,
  BookOpen,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { GiPeaceDove } from "react-icons/gi";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate pathname detection (in real Next.js, use usePathname from next/navigation)
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "home", path: "/", icon: Home },
    {
      name: "New Project 2026",
      path: "/newproject",
      icon: Home,
      hasBadge: true,
    },
    { name: "Donations", path: "/donations", icon: Home },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50
    transition-[background-color,backdrop-filter,box-shadow]
    duration-200 ease-out
    ${
      scrolled
        ? "bg-slate-950/98 backdrop-blur-xl transform-gpu shadow-[0_1px_30px_rgba(79,70,229,0.15)]"
        : "bg-transparent"
    }
  `}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            {/* Logo - Peace Dove Icon + Name */}
            <a href="/" className="group flex items-center gap-3 relative z-10">
              {/* Animated Dove Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/40 transition-all duration-500" />
                <div className="relative w-14 h-14 flex items-center justify-center">
                  {/* Peace Dove SVG */}
                  <GiPeaceDove
                    className="text-7xl mr-2"
                    aria-hidden="true"
                  />{" "}
                  {/* Icon */}
                </div>
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <h1 className="text-2xl md:text-3xl font-bold text-white group-hover:tracking-wider transition-all duration-300">
                  ARIF SABIR
                  <span className="text-indigo-400 group-hover:text-violet-400 transition-colors duration-300 text-4xl">
                    .
                  </span>
                </h1>
                <p className="text-xs text-slate-400 group-hover:text-indigo-400 transition-colors duration-300 tracking-wide">
                  Pastor & Worshipper
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => {
                const isActive = currentPath === link.path;
                return (
                  <a
                    key={idx}
                    href={link.path}
                    className={`group relative px-6 py-3 transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2 text-base font-medium capitalize">
                      <link.icon
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive ? "rotate-0" : "group-hover:rotate-12"
                        }`}
                      />
                      {link.name}

                      {/* Badge for New Project 2026 */}
                      {link.hasBadge && (
                        <span className="relative flex items-center justify-center">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/40 opacity-75"></span>
                          <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xs font-bold text-white shadow-lg">
                            !
                          </span>
                        </span>
                      )}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-lg" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full" />
                      </>
                    )}

                    {/* Hover effect */}
                    {!isActive && (
                      <>
                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 rounded-lg transition-all duration-300" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                      </>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Bible/Ministry Button */}
              <button
                onClick={() => setIsDialogOpen(true)}
                className="group relative px-5 py-2.5 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-xl hover:border-indigo-500 hover:text-white transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                  <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 transition-all duration-300" />
              </button>
            </div>

            {/* Mobile: Bible Icon + Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Bible Icon */}
              <button
                onClick={() => setIsDialogOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <BookOpen className="w-5 h-5 text-indigo-400" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-indigo-400 hover:border-indigo-500 hover:bg-slate-800 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 pb-6">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 space-y-2 shadow-2xl">
              {/* Mobile Logo */}
              <div className="text-center mb-6 pb-6 border-b border-slate-800">
                <h1 className="text-3xl font-bold text-white">
                  ARIF<span className="text-indigo-400">.</span>
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Pastor & Worshipper
                </p>
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link, idx) => {
                const isActive = currentPath === link.path;
                return (
                  <a
                    key={idx}
                    href={link.path}
                    className={`group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 text-white"
                        : "text-slate-300 hover:text-white hover:bg-indigo-500/10 border border-transparent hover:border-indigo-500/20"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? "text-indigo-400" : "group-hover:rotate-12"
                        }`}
                      />
                      <span className="font-medium capitalize text-lg">
                        {link.name}

                        {/* Mobile Badge for New Project 2026 */}
                        {link.hasBadge && (
                          <span className="relative ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-xs font-bold text-white shadow-lg animate-pulse">
                            !
                          </span>
                        )}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? "text-indigo-400"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Ministry Dialog Modal */}
      {isDialogOpen && (
        <div
          onClick={() => setIsDialogOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl shadow-2xl max-w-lg w-full p-8 animate-scaleIn overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

            {/* Close Button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 hover:rotate-90 hover:border-red-500 transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* YouTube Icon */}
            <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-pink-600 flex items-center justify-center shadow-lg shadow-red-500/50 overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
              <Youtube className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="relative text-center space-y-4 z-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Preaching YouTube Channel
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed px-4">
                Follow us for more inspiring and spiritual videos that bring
                hope and faith to your life.
              </p>

              <div className="pt-6 space-y-3">
                <a
                  href="https://www.youtube.com/@zindgikiroti5018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-red-500/50 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Youtube className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Watch on YouTube</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </a>

                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="w-full px-6 py-4 border-2 border-slate-700 text-slate-300 rounded-xl font-medium hover:border-slate-600 hover:bg-slate-800/50 hover:text-white transition-all duration-300 active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Header;
