"use client";

import { useContext } from "react";
import GameCard from "../card/GameCard";
import GameContext from "@/app/context/GameContext";

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
      <style>{`
      .GameContainer{
        gap: 20px;
        display: grid;    
        justify-content: center;  
        align-content: center;                   
        grid-template-columns: repeat(auto-fill, 272px);
        place-content: center;
      }  

      .GameSection{
        margin: 50px 20px 20px 20px;
      }
  `}</style>
    </section>
  );
}

export default GameContainer;
