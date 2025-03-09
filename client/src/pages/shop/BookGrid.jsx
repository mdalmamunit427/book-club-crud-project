import React from 'react';
import BookCard from './BookCard';

const BookGrid = ({ books, loading, error, onDeleteBook }) => {
  // Get the number of skeleton cards to show:
  // If books exist, use their length, otherwise default to 8
 

  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {loading ? (
        // Show skeleton loaders matching the number of books
        <div className=' text-gray-500 min-h-[50vh]'>Loading...</div>
      ) : books.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 py-36">
          No books found in this category.
        </div>
      ) : (
        books.map((book) => (
          <BookCard 
            key={book._id} 
            book={book} 
            onDelete={onDeleteBook}
          />
        ))
      )}
    </div>
  );
};

export default BookGrid; 