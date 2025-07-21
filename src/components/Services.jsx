import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="container mx-auto max-w-7xl p-6">
      <h1 className="text-4xl font-bold text-center underline" data-aos="fade-up">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 font-semibold">
        <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl" data-aos="fade-right">
          <h2 className="text-xl font-semibold mb-4">Health Sector Initiatives</h2>
          <ul className="list-disc list-inside text-indigo-700">
            <li className='mt-4'>Health research projects and public health initiatives</li>
            <li className='mt-4'>Development of digital health solutions and applications</li>
            <li className='mt-4'>Capacity building for healthcare professionals in emerging technologies</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl" data-aos="fade-left">
          <h2 className="text-xl font-semibold mb-4">Research Support & Collaboration</h2>
          <ul className="list-disc list-inside text-indigo-700">
            <li className='mt-4'>Support for research infrastructure, funding, and collaborative projects</li>
            <li className='mt-4'>Partnerships with domestic and international research organizations</li>
            <li className='mt-4'>Access to resources for conducting cutting-edge scientific research</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl mt-10" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-4">Scientific Publications & Journals</h2>
          <ul className="list-disc list-inside text-indigo-700">
            <li className='mt-4'>Management of peer-reviewed journals and publication platforms</li>
            <li className='mt-4'>Training in publication ethics, peer review, and editorial management</li>
            <li className='mt-4'>Promotion of global knowledge sharing and open-access research</li>
          </ul>
        </div>
        <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-500 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl mt-10" data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-4">Capacity-Building Training Programs</h2>
          <ul className="list-disc list-inside text-indigo-700">
            <li className='mt-4'>Research methodology workshops</li>
            <li className='mt-4'>Training in data analysis, software, and project management</li>
            <li className='mt-4'>Specialized training for health, education, and research professionals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;