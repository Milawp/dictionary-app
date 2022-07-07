import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, getResults] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    getResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
