import React from "react";

export const Card = (props) => {
  return (
    <div>
      <div className="card-container" onClick={props.onClick}>
        <img
          name={props.name}
          className="card-image"
          alt="constellation"
          src={`https://source.unsplash.com/1600x900/?${props.name}`}
        />
        <p name={props.name}>{props.constellation}</p>
      </div>
    </div>
  );
};
