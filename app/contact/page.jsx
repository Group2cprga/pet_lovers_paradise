"use client"; 

import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs'; 

const ContactPage = () => {
  const { user } = useUser(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    
    if (user) {
      setFormData({
        name: user.firstName || '',
        email: user.emailAddresses[0]?.emailAddress || '',
        message: '',
      });
    }
  }, [user]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Form submitted successfully!');
  };

  return (
    <>
      <div className="flex justify-center items-center bg-teal-500 py-2 rounded-2xl">  
        <div className="bg-white rounded-2xl p-12 w-full max-w-4xl border-4 border-teal-500">
          <section className="text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-500 mb-6">
              We would love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out to us.
            </p>
          </section>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <section>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </section>

            
            <section>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </section>

            
            <section>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </section>

            
            <section className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg transition duration-300 transform hover:bg-teal-500 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
              >
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
