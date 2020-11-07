import React from "react";

export const Main = (props) => {
  return (
    <div className="quiz-container">
      <h1 className="main-title">Which planet should you call home?</h1>
      <img
        className="main-image"
        alt="planet"
        src="https://source.unsplash.com/1600x900/?space"
      />
      <div>
        <button className="main-button" onClick={props.onClick}>
          Begin Quiz
        </button>
      </div>
    </div>
  );
};
