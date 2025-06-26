import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-8 text-center">Contact Us</h2>

      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="max-w-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Address:</h3>
            <p className="text-gray-700 flex items-center"><MapPin className="h-4 w-4 mr-2 text-gray-500" /> 123 Health Street, Cityville</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Phone:</h3>
            <p className="text-gray-700 flex items-center"><Phone className="h-4 w-4 mr-2 text-gray-500" /> (123) 456-7890</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Email:</h3>
            <p className="text-gray-700 flex items-center"><Mail className="h-4 w-4 mr-2 text-gray-500" /> info@swasthpath.com</p>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.191372076719!2d-118.24368478487222!3d34.05223428063377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1701640544086!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}  
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;