"use client";

import { use, useState } from "react";
import { gamesPromise } from "../services/FetchGames";
import GameContext from "./GameContext";

export default function GameState(props) {
  const [games, setGames] = useState(use(gamesPromise))
  const [search, setSearch] = useState('')

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        search,
        setSearch
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
