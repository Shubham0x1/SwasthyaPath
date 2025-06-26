import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SwasthPath. All rights reserved.
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="hover:text-blue-200">Facebook</Link>
          <Link to="#" className="hover:text-blue-200">Twitter</Link>
          <Link to="#" className="hover:text-blue-200">Instagram</Link>
        </div>

        <div className="mt-4 md:mt-0">
          <form className="flex">
            <input type="email" placeholder="Subscribe to our newsletter" className="bg-blue-700 text-white px-4 py-2 rounded-l-md focus:outline-none" />
            <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-r-md">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;