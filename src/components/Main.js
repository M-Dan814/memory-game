import React, { useState } from "react";
import { click } from "./clickEvent";
import { Header } from "./Header";

let cards = click();

const Main = () => {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const onClickImage = (e) => {
    cards = click();
    const val = e.target.alt;
    if (clicked.indexOf(val) < 0) {
      setClicked([...clicked, val]);
      setScore(score + 1);
      if (score >= 16) {
        alert("Congratulations! You have acheived the highest score possible!");
        setClicked([]);
        setHighScore(score);
        setScore(0);
        return;
      }
      return
    }

    setClicked([]);
    if (score > highScore) {
      setHighScore(score);
    }
    alert("Oops! You have clicked on that one already! Your score: " + score);
    setScore(0);
  };

  return (
    <>
      <Header scored={score} highScored={highScore} />
      <div className="cards">
        {cards.map((card) => {
          return (
            <div key={card.name} className="card" value={card.name}>
              <img
                onClick={onClickImage}
                src={card.img}
                alt={card.name}
                width="250"
                height="150"
              />
              <span>{card.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Main };
