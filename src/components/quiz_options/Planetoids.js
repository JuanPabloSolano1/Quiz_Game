import React from "react";
import { Card } from "../Cards";

export const Planetoids = (props) => {
  const planetoids = [
    "Comet",
    "Asteroid",
    "Star",
    "Meteor",
    "Black Hole",
    "Galaxy"
  ];
  const element = planetoids.map((planetoid, index) => {
    return (
      <div key={index}>
        <div className="cards-grid-container">
          <Card
            clicked={props.clicked}
            name={planetoid}
            onClick={props.onClick}
            constellation={planetoid}
          />
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="main-title">What is your Planetoid?</h1>
      <div className="cards-grid-container">
        <div className="grid-container">{element}</div>
      </div>
    </div>
  );
};
