import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto py-12 px-6">
      <section className="hero bg-blue-100 rounded-lg py-16 px-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Accessible and Affordable Health Diagnostics</h1>
          <p className="text-lg text-gray-700 mb-8">Empowering you to take control of your health with comprehensive diagnostics and wellness services.</p>
          <Link to="/book" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">Book an Appointment</Link>
        </div>
      </section>

      <section className="intro text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Welcome to SwasthPath</h2>
        <p className="text-gray-700">Your trusted partner in health and wellness. We offer a range of diagnostic and wellness services designed to meet your needs.</p>
      </section>

      <section className="features flex flex-wrap justify-around">
        <div className="feature-item w-full md:w-1/3 p-4">
          <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="Diagnostic Tests" className="rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Diagnostic Tests</h3>
          <p className="text-gray-700">Comprehensive diagnostic tests for early detection and prevention.</p>
        </div>
        <div className="feature-item w-full md:w-1/3 p-4">
          <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="Wellness Packages" className="rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Wellness Packages</h3>
          <p className="text-gray-700">Customized wellness packages to promote a healthy lifestyle.</p>
        </div>
        <div className="feature-item w-full md:w-1/3 p-4">
          <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="Doctor Consultations" className="rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Doctor Consultations</h3>
          <p className="text-gray-700">Connect with experienced doctors for personalized consultations.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;