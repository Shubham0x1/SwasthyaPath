import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold text-blue-600">SwasthPath ⚕️</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="py-2 px-3 text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/about" className="py-2 px-3 text-gray-700 hover:text-blue-500">About Us</Link>
          <Link to="/services" className="py-2 px-3 text-gray-700 hover:text-blue-500">Services</Link>
          <Link to="/book" className="py-2 px-3 text-gray-700 hover:text-blue-500">Book Appointment</Link>
          <Link to="/contact" className="py-2 px-3 text-gray-700 hover:text-blue-500">Contact Us</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;