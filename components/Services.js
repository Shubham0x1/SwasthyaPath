import React from 'react';
import { Calendar, Home, Users, Heart } from 'lucide-react';

function Services() {
  const servicesData = [
    { icon: <Calendar className="h-6 w-6 text-blue-500" />, title: 'Diagnostic Tests', description: 'Comprehensive diagnostic tests for early detection.' },
    { icon: <Home className="h-6 w-6 text-blue-500" />, title: 'Wellness Packages', description: 'Customized wellness packages for a healthy lifestyle.' },
    { icon: <Users className="h-6 w-6 text-blue-500" />, title: 'Doctor Consultations', description: 'Connect with experienced doctors for personalized advice.' },
    { icon: <Heart className="h-6 w-6 text-blue-500" />, title: 'Home Sample Collection', description: 'Convenient sample collection from the comfort of your home.' },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;