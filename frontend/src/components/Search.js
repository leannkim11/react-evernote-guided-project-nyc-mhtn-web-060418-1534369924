import React from "react";

const Search = props => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={props.searchTerm}
        onChange={event => props.handleSearch(event)}
      />
    </div>
  );
};

export default Search;
