import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg mb-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        <p className="text-md mb-4">Gokarneshwor, Kathmandu, Nepal | Contact: +977-123456789</p>
        <div className="flex justify-center space-x-6">
          <span className="hover:text-blue-400 transition duration-200">Email</span>
          <span className="hover:text-blue-400 transition duration-200">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;