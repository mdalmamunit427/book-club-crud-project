import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* About Column */}
          <div className='space-y-4'>
            <h4 className='text-lg font-bold mb-4'>About Us</h4>
            <p className='text-gray-400 text-sm leading-relaxed'>
              We are a team of book lovers who are dedicated to providing the best books to our customers. Discover your next favorite read with us.
            </p>
            <div className='flex space-x-4 pt-4'>
              <a href="#" className='text-gray-400 hover:text-amber-500 transition-colors'>
                <FaFacebookF size={20} />
              </a>
              <a href="#" className='text-gray-400 hover:text-amber-500 transition-colors'>
                <FaTwitter size={20} />
              </a>
              <a href="#" className='text-gray-400 hover:text-amber-500 transition-colors'>
                <FaInstagram size={20} />
              </a>
              <a href="#" className='text-gray-400 hover:text-amber-500 transition-colors'>
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><Link to="/" className='text-gray-400 hover:text-amber-500 transition-colors'>Home</Link></li>
              <li><Link to="/books" className='text-gray-400 hover:text-amber-500 transition-colors'>All Books</Link></li>
              <li><Link to="/new-releases" className='text-gray-400 hover:text-amber-500 transition-colors'>New Releases</Link></li>
              <li><Link to="/bestsellers" className='text-gray-400 hover:text-amber-500 transition-colors'>Bestsellers</Link></li>
              <li><Link to="/about" className='text-gray-400 hover:text-amber-500 transition-colors'>About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Support</h4>
            <ul className='space-y-2'>
              <li><Link to="/contact" className='text-gray-400 hover:text-amber-500 transition-colors'>Contact Us</Link></li>
              <li><Link to="/faq" className='text-gray-400 hover:text-amber-500 transition-colors'>FAQ</Link></li>
              <li><Link to="/shipping" className='text-gray-400 hover:text-amber-500 transition-colors'>Shipping Information</Link></li>
              <li><Link to="/returns" className='text-gray-400 hover:text-amber-500 transition-colors'>Returns Policy</Link></li>
              <li><Link to="/privacy" className='text-gray-400 hover:text-amber-500 transition-colors'>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Newsletter</h4>
            <p className='text-gray-400 text-sm mb-4'>Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className='space-y-2'>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className='w-full px-4 py-2 pl-10 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500'
                />
                <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <button
                type="submit"
                className='w-full bg-amber-500 text-gray-900 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © {currentYear} Your Bookstore. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <Link to="/terms" className='text-gray-400 text-sm hover:text-amber-500 transition-colors'>Terms of Service</Link>
              <Link to="/privacy" className='text-gray-400 text-sm hover:text-amber-500 transition-colors'>Privacy Policy</Link>
              <Link to="/cookies" className='text-gray-400 text-sm hover:text-amber-500 transition-colors'>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;