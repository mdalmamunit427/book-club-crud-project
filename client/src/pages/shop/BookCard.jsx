import React from 'react';
import { Link } from 'react-router';

// Main BookCard Component
const BookCard = ({ book, onDelete}) => {


  return (
    <div className="group shadow-md rounded-lg">
      {/* Book Image */}
      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-yellow-100 p-8 relative group">
        <img
          src={book.imageUrl || '/placeholder-book.jpg'}
          alt={book.title}
          className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/books/${book._id}`} className="bg-amber-500 text-white py-2 px-4 rounded cursor-pointer">
            View Details
          </Link>
        </div>
      </div>
      
      {/* Book Details */}
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-medium text-gray-900">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500">
          {book.author}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-amber-500 font-medium">
            $ {book?.price.toFixed(2)} USD
          </p>
          <div className="flex space-x-2">
            <Link 
              to={`/books/edit/${book._id}`}
              className="text-gray-400 hover:text-gray-600"
            >
              Edit
            </Link>
            <button 
              onClick={() => onDelete(book._id)}
              className="text-gray-400 hover:text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard; 