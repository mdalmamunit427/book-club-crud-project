import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/books', label: 'Shop' },
    { to: '/ebooks', label: 'Ebooks' },
    { to: '/membership', label: 'Membership' },
    { to: '/books/add', label: 'Add Book' },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold uppercase tracking-wider">
            Book<span className="text-amber-500">Club.</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <NavLink 
              to="/cart" 
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <FaShoppingCart className="h-5 w-5" />
            </NavLink>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button 
              className="md:hidden text-gray-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `text-sm font-medium py-2 transition-colors ${
                      isActive ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;