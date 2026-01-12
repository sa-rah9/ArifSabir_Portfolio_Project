"use client";

import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader,
  MessageSquare,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      description: "(+44) 07413074274",
      link: "tel:+447413074274",
      color: "from-blue-500 to-cyan-500",
      stat: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      description: "rogerkhan2006@gmail.com",
      link: "mailto:rogerkhan2006@gmail.com",
      color: "from-violet-500 to-purple-500",
      stat: "Quick Response",
    },
    {
      icon: MapPin,
      title: "Address",
      description: "60 St Elmo close Slough, Berkshire",
      link: "https://www.google.com/maps?q=60+St+Elmo+Close+Slough+Berkshire",
      color: "from-pink-500 to-rose-500",
      stat: "Visit Us",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    // Create form data object for Formspree
    const formPayload = new FormData();
    formPayload.append("firstname", formData.firstname);
    formPayload.append("lastname", formData.lastname);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/xykkyebw", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setStatusType("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatusMessage(
            data.errors.map((error) => error.message).join(", ") ||
              "Something went wrong. Please try again."
          );
        } else {
          setStatusMessage("Failed to send message. Please try again.");
        }
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 -right-48 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm mb-6 hover:bg-indigo-500/20 transition-all duration-300">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">
              Lets Connect
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lets Work
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Together
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Whatever you do, work at it with all your heart, as working for the
            Lord, not for human masters.
          </p>
          <p className="text-indigo-400 font-medium">— Colossians 3:23</p>
        </div>

        {/* Main Content - Single Column Centered Layout */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Contact Info Cards Row */}
          <div
            className="grid md:grid-cols-3 gap-6 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  {/* Gradient orb */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
                  />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-sm text-slate-400 mb-1">
                        {item.title}
                      </p>
                      <h3 className="text-base font-medium text-white group-hover:text-indigo-400 transition-colors duration-300 break-words">
                        {item.description}
                      </h3>
                      <p className="text-xs text-indigo-400 mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.stat}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-6 right-6 w-6 h-6 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg
                        className="w-3 h-3 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form - Full Width */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {/* Form Header */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Send a Message
                </h2>
                <p className="text-slate-400">
                  Fill out the form below and I will get back to you within
                  24-48 hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Name Fields Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstname"
                      className="text-sm font-medium text-slate-300 flex items-center gap-2"
                    >
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-slate-600"
                      placeholder="John"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="lastname"
                      className="text-sm font-medium text-slate-300 flex items-center gap-2"
                    >
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-slate-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-300 flex items-center gap-2"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-slate-600"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-slate-600"
                      placeholder="+44 7413 074274"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300 flex items-center gap-2"
                  >
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none hover:border-slate-600"
                    placeholder="Tell me about your project, ideas, or how I can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative flex items-center justify-center gap-3 z-10">
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Status Message */}
                {statusMessage && (
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border animate-fadeIn ${
                      statusType === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {statusType === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium">{statusMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Additional Info Banner */}
          <div
            className="grid md:grid-cols-2 gap-6 animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Response Time
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I typically respond within 24-48 hours. For urgent matters,
                    please call directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Lets Talk
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Whether its ministry, collaboration, or spiritual guidance -
                    Im here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(99, 102, 241, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(99, 102, 241, 0.03) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
