import React from "react";
import "./SearchBar.css";
const Search = (props) => {
  return (
    <div className="Search">
      <input
        onChange={props.changed}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};
export default Search;
