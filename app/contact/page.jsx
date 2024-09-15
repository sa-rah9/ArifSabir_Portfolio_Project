"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head"; // Import Head for SEO tags

// Contact Information
const info = [
  {
    icon: <FaPhoneAlt aria-label="Phone icon" />,
    title: "Phone",
    description: "(+44) 07413074274",
    link: "tel:+447413074274",
  },
  {
    icon: <FaEnvelope aria-label="Email icon" />,
    title: "Email",
    description: "rogerkhan2006@gmail.com",
    link: "mailto:rogerkhan2006@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt aria-label="Address icon" />,
    title: "Address",
    description: "60 St Elmo close Slough, Berkshire",
    link: "https://www.google.com/maps?q=60+St+Elmo+Close+Slough+Berkshire",
  },
];

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace with actual submission logic)
    console.log("Form Data Submitted: ", formData);

    // Optionally reset form fields
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <Head>
        <title>Contact Arif Sabir - Pastor & Worshipper</title>
        <meta name="description" content="Get in touch with Arif Sabir, a devoted Pastor and Worshipper. Contact him through phone, email, or visit his address for spiritual guidance and support." />
        <meta name="keywords" content="Contact Arif Sabir, Pastor, Worshipper, Contact Form, Spiritual Guidance" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Arif Sabir - Pastor & Worshipper" />
        <meta property="og:description" content="Get in touch with Arif Sabir, a devoted Pastor and Worshipper. Contact him through phone, email, or visit his address for spiritual guidance and support." />
        <meta property="og:image" content="https://i0.wp.com/www.evertonparkchurch.com.au/wp-content/uploads/2016/01/1601-Worshipping_God_B_web.jpg?w=1153&ssl=1" /> {/* Update with actual image URL */}
        <meta property="og:url" content="https://www.worshiper-arifsabir.com/contact" /> {/* Update with actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arif Sabir's Portfolio" />
      </Head>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <article className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-title"
            >
              <h3 id="contact-form-title" className="text-4xl text-[#FFEA00]">
                Let&apos;s work together
              </h3>
              <p className="text-white/80 text-xl">
                &quot;At the heart of everything we do is a commitment to excellence and purpose. As it is written, &apos;Whatever you do, work at it with all your heart, as working for the Lord, not for human masters&apos; (Colossians 3:23). We approach every project with passion and dedication, striving to create a meaningful experience that goes beyond just meeting expectations. Our goal is to engage with you fully, helping bring your vision to life in a way that reflects true craftsmanship and care.&quot;
              </p>
              <div className="grid grid-col-1 md:grid-col-2 gap-6 ">
                <label htmlFor="firstname" className="sr-only">First Name</label>
                <Input
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Firstname"
                  className="text-xl"
                  required
                />
                <label htmlFor="lastname" className="sr-only">Last Name</label>
                <Input
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Lastname"
                  className="text-xl"
                  required
                />
                <label htmlFor="email" className="sr-only">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  className="text-xl"
                  required
                />
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone number"
                  className="text-xl"
                />
              </div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px] text-xl"
                placeholder="Type your message here."
                required
              />
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </article>

          {/* Info Section */}
          <aside className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[52px] h-[52px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-[#FFEA00] rounded-md flex items-center justify-center"
                    aria-label={item.title}
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </a>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
