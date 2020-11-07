import React from "react";

export const Mars = (props) => {
  return (
    <div className="result-container">
      <h1 className="result-header">Mars</h1>
      <img
        className="result-image"
        alt="mercury"
        src={`https://source.unsplash.com/1600x900/?mars,planet}`}
      />
      <p className="reult-paragraph">
        You are likely to live in the sand dunes in Mars
      </p>
      <button className="result-button" onClick={props.onClick}>
        Restart
      </button>
    </div>
  );
};
