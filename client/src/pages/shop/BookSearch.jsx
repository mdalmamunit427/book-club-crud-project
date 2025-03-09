import React from 'react';
import { useBooks } from '../../context/BookContext';

const BookSearch = () => {
  const { filters, updateFilters, fetchBooks } = useBooks();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={filters.search}
        onChange={(e) => updateFilters({ search: e.target.value })}
        placeholder="Search books..."
      />
      <button type="submit" onClick={handleSearch}>Search</button>
    </form>
  );
};

export default BookSearch; 