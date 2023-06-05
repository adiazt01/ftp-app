import { GET_GAME, GET_GAMES } from "../type.js";

export default function GameReducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
      };
    case GET_GAME:
      return {
        ...state,
        selectedGame: payload,
      };
    default:
      return state;
  }
}
