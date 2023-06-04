"use client";
import React, { useEffect, useState,useContext } from "react";
import { useRef } from "react";
import GameCard from "../card/GameCard";

function GameContainer({ games }) {
  const [visible, setVisible] = useState(false);
  const [loadGame, setLoadGame] = useState(0)
  const limit = useRef(null);

  useEffect(() => {
    const oberver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },{
        rootMargin: "-20px"
      }
    );
    oberver.observe(limit.current);
    
    return () => oberver.disconnect();
  }, []);

  useEffect(() => {
        if(visible){
          setLoadGame(loadGame+3)
        }
    }, [loadGame, visible])
  
    
  return (
    <section className="GameSection">
      <div className="GameContainer">
        {games.slice(0, loadGame).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div ref={limit}></div>
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
