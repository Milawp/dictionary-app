import React, { useState } from "react";
import "./search.css";
import axios from "axios";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //https://api.dictionaryapi.dev/api/v2/entries/en_US/lime

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input type="serach" onChange={handleKeywordChange} />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
}
