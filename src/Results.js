import React from "react";
import Meaning from "./Meaning";
export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
        <h1>Word: {props.results.word}</h1>
        <h2>Phonetics: /{props.results.phonetic}/</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
