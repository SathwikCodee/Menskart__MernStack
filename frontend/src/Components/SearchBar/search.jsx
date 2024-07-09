// Search.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/results/${searchTerm}`);
    }
  };

  return (
    <div>
      <form className="search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="search__input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search__button">
          <i className="ri-search-2-line"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
