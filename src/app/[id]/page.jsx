"use client";
import { useContext } from "react";
import GameState from "../context/games/GameState";
import GameContext from "../context/games/GameContext";

function Page() {
  const { selectedGame } = useContext(GameContext);

  return (
    <GameState>
      <p>{selectedGame.id}</p>
    </GameState>
  );
}

export default Page;
