import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import SearchResults from "./SearchResults.jsx";

const Filter = () => {
  const { actions } = useContext(Context);
  const [searchInfo, setSearchInfo] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInfo(value);
    actions.search(value);
  };

  return (
    <div className="filter-container hero">
      <div className="filter-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInfo}
          onChange={handleChange}
        />
      </div>
      <SearchResults />
    </div>
  );
};

export default Filter;
