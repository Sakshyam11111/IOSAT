import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-slate-100 to-gray-200 flex flex-col items-center justify-center p-6">
      {/* Title and Subtitle */}
      <div className="text-left w-full max-w-6xl mb-12" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-black mb-2">Contact</h1>
        <p className="text-gray-600 max-w-md">
          Feel free to contact us at any time. We’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form and Info */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/3" data-aos="fade-right">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-xl rounded-xl p-6 md:p-10">
            <div className="relative">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-transparent py-2 transition-all"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-transparent py-2 transition-all"
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                required
                rows="4"
                className="w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none bg-transparent py-2 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 font-semibold flex items-center justify-center gap-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 text-center mt-3 transition-all">Thanks! Your message has been sent. ✅</p>
            )}
          </form>
        </div>

        {/* Right Side - Info Box */}
        <div
          className="w-full md:w-1/3 bg-gray-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
          data-aos="fade-left"
        >
          {/* Decorative Boxes */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-indigo-500 transform -translate-x-3 -translate-y-3 rounded-br-xl"></div>
          <div className="absolute bottom-0 right-0 w-6 h-16 bg-indigo-500 transform translate-x-3 translate-y-3 rounded-tl-xl"></div>

          <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
          <ul className="space-y-6 text-white text-base">
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-lg mt-1 text-indigo-400" />
              <a href="mailto:info@iosat.org" className="hover:underline">info@iosat.org</a>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="text-lg mt-1 text-indigo-400" />
              <span>+977-123456789</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-lg mt-1 text-indigo-400" />
              <span>
                New Baneshwor-31<br />
                Kathmandu, Nepal
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
