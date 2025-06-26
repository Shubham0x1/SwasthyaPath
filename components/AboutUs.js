import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">About SwasthPath</h2>

      <section className="mission-vision mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
        <p className="text-gray-700 mb-4">To provide accessible and affordable healthcare solutions to empower individuals to lead healthier lives. 🌟</p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
        <p className="text-gray-700 mb-4">To be a leading healthcare provider, recognized for innovation, quality, and commitment to community well-being. 🌱</p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Values</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Accessibility: Ensuring healthcare is within reach for everyone.</li>
          <li>Affordability: Offering cost-effective solutions without compromising quality.</li>
          <li>Quality: Delivering high-standard services with experienced professionals.</li>
          <li>Innovation: Continuously improving and adapting to meet evolving healthcare needs.</li>
          <li>Community: Building a healthier and more connected community.</li>
        </ul>
      </section>

      <section className="commitment">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Commitment to Accessible Health Solutions</h3>
        <p className="text-gray-700">At SwasthPath, we are dedicated to breaking down barriers to healthcare access. We believe that everyone deserves the opportunity to live a healthy and fulfilling life. ❤️</p>
      </section>
    </div>
  );
}

export default AboutUs;