import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  background-color: gray;

  h1 {
    font-weight: 600;
    font-size: 25px;
  }

  p {
    margin: 10px 0;
    span {
      color: #40619e;
      cursor: pointer;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: #40619e;
  }
`;

export const TimerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    color: #fff;
  }
`;

export const CarWayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const CarWay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130%;
  border-bottom: 3px dashed yellow;
`;

export const Img = styled.img`
  width: 8%;
`;

export const Wpm = styled.div`
  text-align: center;
  width: 150px;
  font-weight: 600;
  color: #fff;
`;

export const TextContainer = styled.div`
  span {
    color: black;
    font-size: 20px;
  }

  width: 100%;
  margin: 50px 0 20px 0;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f6fbff;
  -webkit-box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  -moz-box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
`;

export const InputDiv = styled.div`
  width: 100%;
  p {
    font-size: 20px;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    margin: 30px 0;
    padding: 0 10px;
    font-size: 20px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 10px 0;
`;
