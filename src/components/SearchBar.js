import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск..."
        className="search-bar"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
