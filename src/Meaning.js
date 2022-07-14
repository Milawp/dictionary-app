import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  
  return (
    <div>
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="definitions">{definition.definition}</span>
            <br />
            <span className="example">{definition.example}</span>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
