import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGem, FaGraduationCap, FaHeartbeat, FaFlask, FaBook } from 'react-icons/fa';

const AboutAnimated = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 p-6 relative overflow-hidden">
      <div
        data-aos="fade-up"
        className="mb-6 md:mb-0 md:mr-12 flex items-center justify-center"
      >
        <FaGem size={120} className="text-blue-600 transition-transform transform hover:scale-125" />
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Research", "Training", "Tech", "Knowledge", "Partnerships"].map((objective, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="font-semibold text-xl text-gray-800">{objective}</h3>
              <p className="text-gray-600">
                {objective === "Research" && "Solve global issues with cutting-edge science."}
                {objective === "Training" && "Build skills through workshops."}
                {objective === "Tech" && "Create tools for health and education."}
                {objective === "Knowledge" && "Share findings with communities."}
                {objective === "Partnerships" && "Collaborate with institutions."}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
          Learn More →
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 md:mt-0 md:ml-12">
        {[
          { icon: <FaGraduationCap size={40} />, text: "Education\nPrograms to connect academia and industry." },
          { icon: <FaHeartbeat size={40} />, text: "Health\nResearch and tech for better health outcomes." },
          { icon: <FaFlask size={40} />, text: "Research\nHigh-quality research in biotech and more." },
          { icon: <FaBook size={40} />, text: "Publications\nSupport peer-reviewed journals." },
        ].map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="flex flex-row items-center space-x-3 transition-transform transform hover:scale-105"
          >
            <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center shadow-md transition-transform transform hover:scale-110">
              {item.icon}
            </div>
            <p className="text-lg text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Optional Decorative Shapes */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-300 opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-300 opacity-30 rounded-full transform translate-x-1/2 translate-y-1/4"></div>
    </div>
  );
};

export default AboutAnimated;