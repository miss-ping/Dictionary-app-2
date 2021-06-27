import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.text}{" "}
      <a href={props.phonetics.audio} target="_blank">
        Listen
      </a>
    </div>
  );
}
