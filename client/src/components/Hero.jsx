import React, { useState } from 'react';
import { useBooks } from '../context/BookContext';
import { FaSearch } from 'react-icons/fa';
import bookHeroImage from '../assets/banner.webp';

const Hero = () => {
  const { updateFilters } = useBooks();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just update filters - the useEffect in context will handle the fetch
    updateFilters({
      search: searchInput.trim(),
      page: 1
    });
  };

  const handleClear = () => {
    setSearchInput('');
    updateFilters({
      search: '',
      page: 1
    });
  };

  return (
    <div className="bg-gray-900 min-h-[600px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-36 flex flex-col lg:flex-row flex-wrap items-center justify-between">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 text-white z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            <span className="text-amber-500">Welcome to Our</span><br />
            <span className="text-amber-500">Books</span> - a haven for<br />
            book lovers
          </h1>
          
          {/* Search bar */}
          <form onSubmit={handleSubmit} className="mt-8 relative max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter title"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-full bg-gray-800 text-white border 
                         border-gray-700 focus:outline-none focus:border-amber-500 pr-32"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-24 top-1/2 transform -translate-y-1/2 
                           text-gray-400 hover:text-gray-300 px-2"
                >
                  ×
                </button>
              )}
              
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 
                         text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 
                         transition-colors disabled:opacity-50 disabled:hover:bg-amber-500 
                         disabled:cursor-not-allowed"
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Image Stack */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative z-10">
          <div className="relative w-full rounded-[3rem] overflow-hidden">
            <img
              src={bookHeroImage}
              alt="Books with flowers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-gray-900 z-0"></div>
    </div>
  );
};

export default Hero;