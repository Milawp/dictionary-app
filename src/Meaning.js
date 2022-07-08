import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}