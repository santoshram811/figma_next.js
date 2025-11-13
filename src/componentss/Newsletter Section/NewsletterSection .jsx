'use client';

import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="NewsletterSection text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">GET EXCLUSIVE OFFERS,</h2>

        {/* Sub Heading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">EVENT UPDATES, AND INSIDER NEWS</p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-medium text-sm whitespace-nowrap"
            >
              SUBMIT
            </button>
          </div>
        </form>

        {/* Optional: Privacy Note */}
        <p className="text-gray-400 text-xs mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
