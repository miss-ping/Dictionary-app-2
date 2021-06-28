import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        <hr />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
