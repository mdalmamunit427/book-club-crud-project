import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useBooks } from '../../context/BookContext';

const BookDetails = () => {
  const { id } = useParams();
  const { currentBook, loading, error, fetchBookDetails, clearCurrentBook } = useBooks();

  window.scrollTo(0, 0);

  useEffect(() => {
    fetchBookDetails(id);
    return () => clearCurrentBook();
  }, [id, fetchBookDetails, clearCurrentBook]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-amber-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!currentBook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Book not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        to="/books" 
        className="inline-flex items-center text-gray-600 hover:text-amber-500 mb-8 transition-colors"
      >
        <FaArrowLeft className="mr-2" />
        Back to Books
      </Link>

      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={currentBook.imageUrl || '/placeholder-book.jpg'}
              alt={currentBook.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Title and Author */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentBook.title}</h1>
            <p className="text-xl text-gray-600">by {currentBook.author}</p>
          </div>

          {/* Price and Genre */}
          <div className="space-y-2">
            <p className="text-2xl font-bold text-amber-500">
              ${currentBook.price?.toFixed(2)} USD
            </p>
            <p className="text-gray-600">
              Genre: <span className="text-gray-900">{currentBook.genre}</span>
            </p>
            {currentBook.publishedYear && (
              <p className="text-gray-600">
                Published: <span className="text-gray-900">{currentBook.publishedYear}</span>
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {currentBook.description || 'No description available.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6">
            <button className=" bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center">
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <Link 
              to={`/books/edit/${currentBook._id}`}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Edit Book
            </Link>
          </div>

          {/* Additional Details */}
          {currentBook.isbn && (
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Additional Information</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">ISBN</p>
                  <p className="text-gray-900">{currentBook.isbn}</p>
                </div>
                <div>
                  <p className="text-gray-600">Pages</p>
                  <p className="text-gray-900">{currentBook.pages || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Language</p>
                  <p className="text-gray-900">{currentBook.language || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Format</p>
                  <p className="text-gray-900">{currentBook.format || 'Paperback'}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;