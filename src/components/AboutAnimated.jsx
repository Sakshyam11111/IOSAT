import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGem, FaGraduationCap, FaHeartbeat, FaFlask, FaBook } from 'react-icons/fa';

const AboutAnimated = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-blue-100 p-6">
      <div
        data-aos="fade-up"
        className="mb-6 md:mb-0 md:mr-12"
      >
        <FaGem size={100} color="currentColor" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Objectives</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
          <li>Research: Solve global issues with cutting-edge science.</li>
          <li>Training: Build skills through workshops.</li>
          <li>Tech: Create tools for health and education.</li>
          <li>Knowledge: Share findings with communities.</li>
          <li>Partnerships: Collaborate with institutions.</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Learn More →
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0 md:ml-12">
        <div
          data-aos="fade-right"
          className="flex flex-row items-center space-x-3"
        >
          <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
            <FaGraduationCap className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg text-gray-600">Education<br/>Programs to connect academia and industry.</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-row items-center space-x-3"
        >
          <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
            <FaHeartbeat className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg text-gray-600">Health<br/>Research and tech for better health outcomes.</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-row items-center space-x-3"
        >
          <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
            <FaFlask className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg text-gray-600">Research<br/>High-quality research in biotech and more.</p>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-row items-center space-x-3"
        >
          <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
            <FaBook className="w-6 h-6 text-white" />
          </div>
          <p className="text-lg text-gray-600">Publications<br/>Support peer-reviewed journals.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutAnimated;