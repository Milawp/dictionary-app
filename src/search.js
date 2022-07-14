import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f917000010000015c12be0341d344a28da8a3c651357729";
    //documentation:https://www.pexels.com/api/documentation/?
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let connect = { Authorization: `Bearer${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: connect }).then(handlePexelsResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="serach"
          autoFocus="on"
          className="search-bar"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
      </form>
      <p>Suggested words: Mountain, Isthmus, Lake, Avalanche...</p>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
