import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>Type of word: {props.meaning.partOfSpeech}</h3>
      <p>
        <strong className="definition">Definition:</strong>{" "}
        {props.meaning.definition}
      </p>
      <p>
        <em>
          <strong className="example">Example:</strong> {props.meaning.example}
        </em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
