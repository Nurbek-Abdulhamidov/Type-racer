import React from "react";
import { Component } from "react";
import Preview from "./Preview";
import Speed from "./Speed";
import getText from "./getText";

const initialState = {
  text: getText(),
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class RaceApp extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
  };

  onUserInputChange = (e) => {
    const val = e.target.value;
    this.setTimer(val);
    this.onFinish(val);
    this.setState({
      userInput: val,
      symbols: this.countCorrectSymbols(val),
    });
  };

  onFinish = (userInput) => {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
      });
    }
  };

  countCorrectSymbols = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  };

  setTimer() {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { sec: prevProps.sec + 1 };
        });
      }, 1000);
    }
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <Preview text={this.state.text} userInput={this.state.userInput} />
            <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              cols="30"
              rows="10"
              placeholder="Start typing"
              readOnly={this.state.finished}
            ></textarea>
            <button onClick={this.onRestart}>Restart</button>
            <Speed sec={this.state.sec} symbols={this.state.symbols} />
            {this.state.symbols}
          </div>
        </div>
      </div>
    );
  }
}

export default RaceApp;
