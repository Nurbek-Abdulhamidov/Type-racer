import React from "react";
import {
  CarWay,
  CarWayContainer,
  Container,
  Img,
  InputDiv,
  TextContainer,
  TimerDiv,
  Wpm,
  Wrapper,
} from "./style";

const Race = () => {
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
          <p>1:15</p>
        </TimerDiv>
        <CarWayContainer>
          <CarWay>
            <Img
              src="https://data.typeracer.com/public/images/avatars/basic-blue.svg"
              alt=""
            />
          </CarWay>
          <Wpm>0 wpm</Wpm>
        </CarWayContainer>
        <TextContainer>
          <p>
            Type the words into the text box, including all spaces, punctuation,
            and proper capitalization. If you make a mistake, you will have to
            correct it before you're allowed to proceed to the next word. a
            queen the locust swarm turned the ground to black. Descending like a
            shadowy tower on a fish's back and scattered the sticks who crawled
            like snakes in the sand as the red clay took the form of a lizard
            who rushed like a moth to the flame of my open hand.
          </p>
          <span>change display format</span>
          <InputDiv>
            <input
              type="text"
              placeholder="Type the above text here when the race begins"
            />
          </InputDiv>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default Race;
