import React from "react";
import { Card } from "../Cards";

export const Shows = (props) => {
  const shows = [
    "Star Wars",
    "Star Trek",
    "Lost in Space",
    "Independence Day",
    "Cosmos",
    "The Mandalorian"
  ];
  const element = shows.map((planetoid, index) => {
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
      <h1 className="main-title">What is your Favorite Space Show?</h1>
      <div className="cards-grid-container">
        <div className="grid-container">{element}</div>
      </div>
    </div>
  );
};
