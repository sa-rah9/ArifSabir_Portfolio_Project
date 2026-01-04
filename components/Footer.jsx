"use client"
import { Heart, Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:rogerkhan2006@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border-t border-indigo-500/10 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                ARIF SABIR
                <span className="text-indigo-400">.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Pastor & Worshipper dedicated to spreading joy, faith, and
                creating meaningful connections through worship and service.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm text-slate-400 font-medium">
                Connect with me:
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group w-11 h-11 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group text-slate-400 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-indigo-400 flex-shrink-0" />
                <a
                  href="mailto:rogerkhan2006@gmail.com"
                  className="hover:text-indigo-400 transition-colors duration-300 break-words"
                >
                  rogerkhan2006@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-indigo-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="leading-relaxed">
                  60 St Elmo close
                  <br />
                  Slough, Berkshire
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-slate-900 px-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© 2026 ARIF SABIR. All Rights Reserved</span>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by</span>
            <a
              href="https://github.com/Codelystic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-medium"
            >
              Codelystic
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:bg-indigo-500/10 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-400 italic text-sm leading-relaxed">
              &quot; For where two or three gather in my name, there am I with
              them. &quot;
              <span className="block mt-1 text-indigo-400 font-medium not-italic">
                - Matthew 18:20
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
