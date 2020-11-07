import React from "react";
import { Card } from "../Cards";

export const Elements = (props) => {
  const elements = ["Fire", "Ice", "Water", "Rock", "Gas", "Sand"];
  const element = elements.map((constellation, index) => {
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
      <h1 className="main-title">What is your Element?</h1>
      <div className="cards-grid-container">
        <div className="grid-container">{element}</div>
      </div>
    </div>
  );
};
