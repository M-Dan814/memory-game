import React, { useState } from "react";
import { click } from "./clickEvent";
import { Header } from "./Header";
import confetti from "canvas-confetti";

let cards = click();

const Main = () => {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const onClickImage = (e) => {
    cards = click();
    const val = e.target.alt;
    if (clicked.indexOf(val) < 0) {
      const newScore = score + 1;
      setClicked([...clicked, val]);
      setScore(newScore);
      if (newScore >= 16) {
        confetti();
        alert("Congratulations! You have achieved the highest score possible!");
        setClicked([]);
        setHighScore(newScore);
        setScore(0);
        return;
      }
      return;
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.name}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-md p-4 text-center text-white transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
            value={card.name}
          >
            <img
              onClick={onClickImage}
              src={card.img}
              alt={card.name}
              className="rounded-md w-full h-32 object-cover mb-2"
            />
            <span className="block font-sevillana text-lg">{card.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export { Main };
