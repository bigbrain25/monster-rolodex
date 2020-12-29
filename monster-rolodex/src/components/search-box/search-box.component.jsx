import React from 'react';

import './search-box.style.css';

const SearchBox = ({ placeholder, onSearchChange }) => (
    <input
        className='search' 
        type='search' 
        placeholder='Search Monster'
        onChange={onSearchChange}
     />
);

export default SearchBox;