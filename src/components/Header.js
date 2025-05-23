import React from "react";

const Header = ({ scored, highScored }) => {
  return (
    <div className="w-full py-6 px-4 bg-gradient-to-r from-green-600 to-green-400 shadow-md rounded-b-xl">
      <h1 className="text-4xl font-bold text-white font-sevillana text-center mb-2">
        Memory Game
      </h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm font-roboto">
        <p className="text-center md:text-left mb-2 md:mb-0">
          Click on tiles that you haven't clicked before to increase your score!
          Good Luck!
        </p>
        <div className="flex space-x-4">
          <span>Current score: {scored}</span>
          <span>Highest Score: {highScored}</span>
        </div>
      </div>
    </div>
  );
};

export { Header };
