import React from "react";

export const Pluto = (props) => {
  return (
    <div className="result-container">
      <div className="animate__bounceInDown">
        <h1 className="result-header">Pluto</h1>
        <img
          className="result-image"
          alt="mercury"
          src={`https://source.unsplash.com/1600x900/?pluto,planet}`}
        />
        <p className="reult-paragraph">
          You are likely to like the glaciers in Pluto
        </p>
        <button className="result-button" onClick={props.onClick}>
          Restart
        </button>
      </div>
    </div>
  );
};
