import React from "react";

export const Earth = (props) => {
  return (
    <div className="result-container">
      <h1 className="result-header">Earth</h1>
      <img
        className="result-image"
        alt="mercury"
        src={`https://source.unsplash.com/1600x900/?erath,planet}`}
      />
      <p className="reult-paragraph">You are in the right planet :).</p>
      <button className="result-button" onClick={props.onClick}>
        Restart
      </button>
    </div>
  );
};
