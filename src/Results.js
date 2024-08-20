import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h1>Word: {props.results.word}</h1>
          <h2> /{props.results.phonetic}/</h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
