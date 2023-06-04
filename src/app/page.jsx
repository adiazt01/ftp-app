"use client";
import { useContext, useEffect } from "react";
import GameContainer from "./components/container/GameContainer";
import { fetchGames } from "./services/Games";
import GameContext from "./context/games/GameContext";

function Posts() {
  const { games, getGames } = useContext(GameContext);
  getGames();

  return <GameContainer games={games}></GameContainer>;
}

export default Posts;
