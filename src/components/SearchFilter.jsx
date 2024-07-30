import React from 'react';

const SearchFilter = ({ searchQuery, onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value); // Update search query in parent component
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchFilter;
