import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="header">
      <h1 className="title">Memory game</h1>
      <div className="sub-head">
        <span>
          Click on tiles that you haven't clicked on before to increase your
          score! Good Luck!
        </span>
        <div className="scores">
          <span>Current score: {score}</span>
          <span>Highest Score: {highScore}</span>
        </div>
      </div>
    </div>
  );
};

export { Header };
