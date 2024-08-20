import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
        <section className="mainword">
          <h1>Word: {props.results.word}</h1>
          <h2> /{props.results.phonetic}/</h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="meaning" key={index}>
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
