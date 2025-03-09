import React, { useState } from 'react';

import communityImage from '../assets/newsletter.webp';

const JoinCommunity = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your email submission logic here
    // For now, just simulate a submission
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div 
      className="relative overflow-hidden bg-cover bg-left bg-gray-900" 
      style={{ backgroundImage: `url(${communityImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the community
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Whether you're seeking advice, networking opportunities, or simply
              a place to belong, join us and be part of something bigger.
            </p>
            
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-6 py-4 rounded-full bg-gray-800 text-white border border-gray-700 
                           focus:outline-none focus:border-amber-500 pr-32"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 
                           bg-amber-500 text-gray-900 px-6 py-2 rounded-full font-semibold 
                           hover:bg-amber-400 transition-colors disabled:opacity-75"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-gray-900 z-0"></div>
    </div>
  );
};

export default JoinCommunity; 