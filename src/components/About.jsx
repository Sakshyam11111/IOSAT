import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image1 from "../assets/image2.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100 opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-100 opacity-30 rounded-full transform translate-x-1/2 translate-y-1/4"></div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-center mb-8 lg:mb-0">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-blue-700"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          About IOSAT
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-gray-700 leading-relaxed max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          The Institute of Science and Technology (IOSAT) is a leading multidisciplinary organization focused on advancing science, education, and health through innovative research, capacity building, and technology development.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div
            className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6 rounded-3xl w-full sm:w-64 flex flex-col justify-center items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <p className="text-2xl font-bold mb-2">Our Mission</p>
            <p className="text-sm leading-relaxed">
              We promote skills, knowledge, and research to improve education and healthcare.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6 rounded-3xl w-full sm:w-64 flex flex-col justify-center items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <p className="text-2xl font-bold mb-2">Our Vision</p>
            <p className="text-sm leading-relaxed">
              To be a leader in advancing science and technology for societal benefit.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <img
            src={Image1}
            alt="IOSAT Robot"
            className="w-full h-auto object-contain transition duration-300 hover:transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default About;