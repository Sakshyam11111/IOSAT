import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/image1.jpg"; 
import Navbar from "./Navbar";

const services = [
  {
    title: "Calibron Solutions",
    description: "Specialized services for scientific industries",
    link: "#",
  },
  {
    title: "Work & Education",
    description: "Connecting academia and job skills",
    link: "#",
  },
  {
    title: "Safer Beacon",
    description: "Empowering pandemic safety tools",
    link: "#",
  },
  {
    title: "Coaching Bygnly",
    description: "Training for the professional world",
    link: "#",
  },
];

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-blue-900 text-white font-sans overflow-hidden overflow-x-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative z-10 text-center mt-10 sm:mt-16 md:mt-28 px-4 sm:px-6"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
          IOSAT
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          Fostering innovation
          <br />
          in science and technology
        </h2>
      </section>

      {/* Services Section */}
      <section className="relative z-10 mt-8 sm:mt-12 px-4 sm:px-6 md:px-10 pb-8 sm:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-blue-800 rounded-lg p-4 sm:p-6 text-left shadow hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              {item.description}
            </p>
            <a
              href={item.link}
              className="inline-flex items-center text-xs sm:text-sm font-semibold hover:underline"
            >
              Explore Now <FaArrowRight className="ml-1 sm:ml-2" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}