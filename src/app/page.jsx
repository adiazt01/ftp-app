"use client";
import { useContext } from "react";
import GameContainer from "./components/container/GameContainer";
import GameContext from "./context/games/GameContext";

function Posts() {
  const { games, getGames } = useContext(GameContext);
  getGames();

  return <GameContainer games={games}></GameContainer>;
}

export default Posts;
