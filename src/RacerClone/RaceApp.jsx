import React from "react";
import { Component } from "react";
import Preview from "./Preview";
import Speed from "./Speed";
import getText from "../TypeRacer/Racer/getText";
import {
  CarWay,
  CarWayContainer,
  Container,
  Img,
  InputDiv,
  Textarea,
  TextContainer,
  TimerDiv,
  Wpm,
  Wrapper,
} from "../TypeRacer/Racer/style";

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
  // handleKey = ({ keyCode }) => {
  //   if (keyCode === 32) {
  //     this.setState({ userInput: "" });
  //   }
  //   console.log(keyCode);
  // };
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Practice Racetrack</h1>
          <p>
            You are in a <b>single-player</b> race. <span>Click here</span> if
            you'd like some competition.
          </p>
          <TimerDiv>
            <h3>The race is on! Type the text below:</h3>
            <p>Symbols : {this.state.symbols}</p>
            <p>Time : {this.state.sec}</p>
          </TimerDiv>
          <CarWayContainer>
            <CarWay>
              <Img
                src="https://data.typeracer.com/public/images/avatars/basic-blue.svg"
                alt=""
              />
            </CarWay>
            <Wpm>
              <Speed sec={this.state.sec} symbols={this.state.symbols} />
            </Wpm>
          </CarWayContainer>

          <TextContainer>
            <Preview text={this.state.text} userInput={this.state.userInput} />
            <InputDiv>
              <Textarea
                value={this.state.userInput}
                onChange={this.onUserInputChange}
                placeholder="Type the above text here when the race begins"
                readOnly={this.state.finished}
                // onKeyDown={this.handleKey}
              ></Textarea>
            </InputDiv>
          </TextContainer>

          <div>
            <button onClick={this.onRestart}>Restart</button>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default RaceApp;
