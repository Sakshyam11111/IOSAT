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
    <div className="container mx-auto flex flex-col gap-6 lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-white">
      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 sm:ml-2 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          INTRODUCING
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          IOSAT advances science, education, and health through research,
          training, and technology.
        </p>

        {/* Mission and Vision Cards */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
          <div
            className="bg-blue-700 text-white p-5 sm:p-6 rounded-3xl w-full sm:w-64 md:w-72 h-auto min-h-[160px] flex flex-col justify-center items-center text-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-blue-800 mx-auto sm:mx-0"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <p className="text-2xl sm:text-3xl font-bold mb-2">Mission</p>
            <p className="text-sm sm:text-base leading-relaxed">
              We promote skills, knowledge, and research to improve education
              and healthcare.
            </p>
          </div>

          <div
            className="bg-blue-700 text-white p-5 sm:p-6 rounded-3xl w-full sm:w-64 md:w-72 h-auto min-h-[160px] flex flex-col justify-center items-center text-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-blue-800 mx-auto sm:mx-0"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <p className="text-2xl sm:text-3xl font-bold mb-2">Vision</p>
            <p className="text-sm sm:text-base leading-relaxed">
              To lead in science and tech for societal good and collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0 sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-12"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <img
            src={Image1}
            alt="IOSAT Robot"
            className="w-full h-auto object-contain rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
