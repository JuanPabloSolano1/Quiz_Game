import React from "react";

export const Jupiter = (props) => {
  return (
    <div className="result-container">
      <h1 className="result-header">Jupiter</h1>
      <img
        className="result-image"
        alt="mercury"
        src={`https://source.unsplash.com/1600x900/?jupiter,planet}`}
      />
      <p className="reult-paragraph">
        You are likely to like the volcanoes and lava that Mercury offers
      </p>
      <button className="result-button" onClick={props.onClick}>
        Restart
      </button>
    </div>
  );
};
