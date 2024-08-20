import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "4f2360cc5d2fbf9f02a9o90ddad3f50t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiKey = "4f2360cc5d2fbf9f02a9o90ddad3f50t";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeyWordChange}
          />
        </form>
        <div className="hint">Suggested words: sunset, house ...</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
