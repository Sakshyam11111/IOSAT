import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-6" data-aos="fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-pulse" data-aos="fade-up">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-700 font-medium" data-aos="fade-up" data-aos-delay="100">
          Feel Free to reach out and let's create something amazing!
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        {/* Contact Info Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300" data-aos="fade-right">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2" data-aos="fade-in">Contact Details</h3>
          <ul className="text-xl text-gray-700 space-y-6">
            <li className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="200">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <span className="hover:text-blue-800 transition duration-200">Gokarneshwor, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="300">
              <FaPhone className="text-2xl text-blue-600" />
              <span className="hover:text-blue-800 transition duration-200">+977-123456789</span>
            </li>
            <li className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="400">
              <FaEnvelope className="text-2xl text-blue-600" />
              <span className="hover:text-blue-800 transition duration-200">aaa111@gmail.com</span>
            </li>
            <li className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="500">
              <FaEnvelope className="text-2xl text-blue-600" />
              <span className="hover:text-blue-800 transition duration-200">LinkedIn Profile</span>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300" data-aos="fade-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2" data-aos="fade-in">Send a Message</h3>
          <div className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="name" className="block text-lg text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200 placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="email" className="block text-lg text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200 placeholder-gray-400"
                placeholder="Your Email"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="message" className="block text-lg text-gray-700 font-semibold">Message</label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200 placeholder-gray-400"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <FaPaperPlane className="inline mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;