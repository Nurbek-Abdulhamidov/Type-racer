import React from "react";

const Preview = ({ text, userInput }) => {
  const matn = text.split("");

  return (
    <div>
      {matn.map((value, index) => {
        let color;
        console.log(index, userInput.length);
        if (index < userInput.length) {
          color = value === userInput[index] ? "green" : "red";
        }
        return (
          <span key={index} style={{ backgroundColor: color }}>
            {value}
          </span>
        );
      })}
    </div>
  );
};

export default Preview;
