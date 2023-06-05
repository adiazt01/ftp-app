"use client"

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import GameCard from "../card/GameCard";

function GameContainer({ games }) {
  const [visible, setVisible] = useState(false);
  const [load, setLoad] = useState(12);
  const limit = useRef(null);

  useEffect(() => {
    const oberver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
      }
    );
    oberver.observe(limit.current);
    console.log(visible)
    return () => oberver.disconnect();
  }, []);

  useEffect(() => {
    console.log(visible)
    if (visible) {
      setLoad((load) => load + 12);
      console.log(load)
    }
  }, [visible]);

  return (
    <section className="GameSection">
      <div className="GameContainer">
        {games.slice(0, load).map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
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
