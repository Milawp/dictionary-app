import React, { useState } from "react";
import "./search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input type="serach" onChange={handleKeywordChange} />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
}
