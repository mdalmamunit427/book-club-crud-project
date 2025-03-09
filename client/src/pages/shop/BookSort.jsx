import React from 'react';
import { useBooks } from '../../context/BookContext';

const BookSort = () => {
  const { filters, updateFilters, fetchBooks } = useBooks();

  const handleSort = (e) => {
    updateFilters({ sortBy: e.target.value });
    fetchBooks();
  };

  return (
    <select value={filters.sortBy} onChange={handleSort}>
      <option value="title">Title</option>
      <option value="price">Price</option>
      <option value="publishedYear">Year</option>
    </select>
  );
}; 