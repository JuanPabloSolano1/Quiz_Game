import React from "react";
import { Card } from "../Cards";

export const Constellation = (props) => {
  const constellations = [
    "Andromeda",
    "Orion",
    "Gemini",
    "Capricorn",
    "Leo",
    "Cassiopeia"
  ];
  const constellation = constellations.map((constellation, index) => {
    return (
      <div key={index}>
        <div className="cards-grid-container">
          <Card
            clicked={props.clicked}
            name={constellation}
            onClick={props.onClick}
            constellation={constellation}
          />
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="main-title">What is your ideal Constellation?</h1>
      <div className="cards-grid-container">
        <div className="grid-container">{constellation}</div>
      </div>
    </div>
  );
};
