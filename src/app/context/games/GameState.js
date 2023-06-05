"use client";

import React, { useReducer } from "react";
import GameReducer from "./GameReducer";
import GameContext from "./GameContext";
import { fetchGames } from "@/app/services/Games";

function GameState({ children }) {
  const initialState = {
    games: [],
    selectedGame: null,
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const getGames = async () => {
    const gamesData = await fetchGames();
    dispatch({
      type: "GET_GAMES",
      payload: gamesData,
    });
  };

  const getGame = async (index) => {
    const gamesData = await fetchGames();
    dispatch({
      type: "GET_GAME",
      payload: gamesData[index]
    })
  };

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        selectedGame: state.selectedGame,
        getGames,
        getGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameState;
