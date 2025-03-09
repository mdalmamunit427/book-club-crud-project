import React from 'react';

const SortBooks = ({ currentSort, onSortChange }) => {
  const sortOptions = [
    { label: 'Default', value: { sortBy: 'title', order: 'asc' } },
    { label: 'Price: Low to High', value: { sortBy: 'price', order: 'asc' } },
    { label: 'Price: High to Low', value: { sortBy: 'price', order: 'desc' } },
    { label: 'Date: Newest', value: { sortBy: 'publishedYear', order: 'desc' } },
    { label: 'Date: Oldest', value: { sortBy: 'publishedYear', order: 'asc' } },
  ];

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm text-gray-600">
        Sort by:
      </label>
      <select
        id="sort"
        className="border rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        value={`${currentSort.sortBy}-${currentSort.order}`}
        onChange={(e) => {
          const [sortBy, order] = e.target.value.split('-');
          onSortChange({ sortBy, order });
        }}
      >
        {sortOptions.map((option) => (
          <option 
            key={`${option.value.sortBy}-${option.value.order}`}
            value={`${option.value.sortBy}-${option.value.order}`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBooks; 