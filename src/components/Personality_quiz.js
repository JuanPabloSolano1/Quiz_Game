import React from "react";
import { Constellation } from "../components/quiz_options/Constellation";
import { Elements } from "./quiz_options/Elements";
import { Planetoids } from "../components/quiz_options/Planetoids";
import { Shows } from "../components/quiz_options/Shows";
import { Main } from "./Main";
import { Mercury } from "./planets/Mercury";
import { Pluto } from "./planets/Pluto";
import { Jupiter } from "./planets/Jupiter";
import { Venus } from "./planets/Venus";
import { Mars } from "./planets/Mars";
import { Earth } from "./planets/Earth";
import "./Personality_quiz.css";

export class PersonalityQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page_number: 0,
      option: [],
      clicked: false
    };
    this.handleResult = this.handleResult.bind(this);
  }

  handleResult(e) {
    const { page_number } = this.state;
    setTimeout(() => {
      this.setState({
        page_number: page_number + 1,
        clicked: !this.state.clicked
      });
    }, 1000);
    let concat = this.state.option.concat(e.target.name);
    this.setState({ option: concat });
  }

  render() {
    const { page_number, option, clicked } = this.state;
    // Refactor Code
    if (page_number === 0) {
      return (
        <div>
          <Main
            onClick={() => {
              this.setState({ page_number: page_number + 1 });
            }}
          />
        </div>
      );
    } else if (page_number === 1) {
      return (
        <div className="quiz-container">
          <Constellation
            onClick={(e) => {
              this.handleResult(e);
            }}
          />
        </div>
      );
    } else if (page_number === 2) {
      return (
        <div className="animate__animated animate__backInUp quiz-container">
          <Elements
            clicked={clicked}
            onClick={(e) => {
              this.handleResult(e);
            }}
          />
        </div>
      );
    } else if (page_number === 3) {
      return (
        <div className="animate__animated animate__backInDown quiz-container">
          <Planetoids
            onClick={(e) => {
              this.handleResult(e);
            }}
          />
        </div>
      );
    } else if (page_number === 4) {
      return (
        <div className="animate__animated animate__backInUp quiz-container">
          <Shows
            onClick={(e) => {
              this.handleResult(e);
            }}
          />
        </div>
      );
    } else {
      if (option[1] === "Fire") {
        return (
          <div>
            <Mercury
              onClick={() => this.setState({ page_number: 0, option: [] })}
            />
          </div>
        );
      } else if (option[1] === "Ice") {
        return (
          <div>
            <Pluto
              onClick={() => this.setState({ page_number: 0, option: [] })}
            />
          </div>
        );
      } else if (option[1] === "Gas") {
        return (
          <Jupiter
            onClick={() => this.setState({ page_number: 0, option: [] })}
          />
        );
      } else if (option[1] === "Rock") {
        return (
          <Venus
            onClick={() => this.setState({ page_number: 0, option: [] })}
          />
        );
      } else if (option[1] === "Sand") {
        return (
          <Mars onClick={() => this.setState({ page_number: 0, option: [] })} />
        );
      } else {
        return (
          <Earth
            onClick={() => this.setState({ page_number: 0, option: [] })}
          />
        );
      }
    }
  }
}
