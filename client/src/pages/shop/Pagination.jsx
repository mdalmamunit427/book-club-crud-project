import React from 'react';
import { useBooks } from '../../context/BookContext';

const Pagination = () => {
  const { filters, totalPages, nextPage, prevPage, updateFilters } = useBooks();

  return (
    <div className="pagination">
      <button 
        onClick={prevPage}
        disabled={filters.page === 1}
      >
        Previous
      </button>
      
      <span>Page {filters.page} of {totalPages}</span>
      
      <button 
        onClick={nextPage}
        disabled={filters.page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination; 