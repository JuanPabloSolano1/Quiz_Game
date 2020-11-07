import React from "react";

export const Venus = (props) => {
  return (
    <div className="result-container">
      <h1 className="result-header">Venus</h1>
      <img
        className="result-image"
        alt="mercury"
        src={`https://source.unsplash.com/1600x900/?venus,planet}`}
      />
      <p className="reult-paragraph">
        You are likely to live in a hut in Venus.
      </p>
      <button className="result-button" onClick={props.onClick}>
        Restart
      </button>
    </div>
  );
};
