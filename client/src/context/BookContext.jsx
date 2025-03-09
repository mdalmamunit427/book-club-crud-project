import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/baseUrl';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Match server pagination defaults
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    genre: '',
    minYear: '',
    maxYear: '',
    author: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'title',
    order: 'asc',
    search: ''
  });

  // Pagination state matching server response
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBooks: 0
  });

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Build query parameters exactly matching server expectations
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== '') {
          params.append(key, value);
        }
      });

      const response = await axios.get(`${baseUrl}/books?${params}`);
      
      // Update states based on server response
      setBooks(response.data.books);
      setPagination({
        currentPage: response.data.currentPage,
        totalPages: response.data.totalPages,
        totalBooks: response.data.totalBooks
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const fetchBookDetails = useCallback(async (bookId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${baseUrl}/books/${bookId}`);
      setCurrentBook(response.data);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearCurrentBook = useCallback(() => {
    setCurrentBook(null);
  }, []);

  const updateFilters = useCallback(async (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      page: newFilters.hasOwnProperty('page') ? newFilters.page : 1
    }));
  }, []);

  // Add effect to fetch books when filters change
  useEffect(() => {
    fetchBooks();
  }, [filters]);

  const value = {
    books,
    currentBook,
    loading,
    error,
    filters,
    pagination,
    fetchBooks,
    fetchBookDetails,
    clearCurrentBook,
    updateFilters
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
}; 