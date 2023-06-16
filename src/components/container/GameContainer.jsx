"use client";

import { useContext } from "react";
import GameCard from "../card/GameCard";
import GameContext from "@/context/GameContext";
import "/src/styles/GameContainer.scss";

function GameContainer({ load }) {
  const { games, search } = useContext(GameContext);
  return (
    <section className="GameSection">
      <div className="GameContainer">
        {search === ""
          ? games
              .slice(0, load)
              .map((game, index) => (
                <GameCard key={index} game={game} index={index} />
              ))
          : games
              .filter((game) => game.title.includes(search))
              .map((game, index) => (
                <GameCard key={index} game={game} index={index} />
              ))}
      </div>
    </section>
  );
}

export default GameContainer;
