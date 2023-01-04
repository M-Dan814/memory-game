import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="title">Memory game</h1>
      <div className="sub-head">
        <span>
          Click on tiles that you haven't clicked on before to increase your
          score! Good Luck!
        </span>
        <div className="scores">
          <span>Current score: {props.scored}</span>
          <span>Highest Score: {props.highScored}</span>
        </div>
      </div>
    </div>
  );
};

export { Header };
