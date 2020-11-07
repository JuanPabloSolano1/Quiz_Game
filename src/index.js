import React from "react";
import { render } from "react-dom";
import { PersonalityQuiz } from "../src/components/Personality_quiz";

const App = () => (
  <div className="main-container">
    <PersonalityQuiz />
  </div>
);

render(<App />, document.getElementById("root"));
