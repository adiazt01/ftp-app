"use client";

import { useContext } from "react";
import GameContext from "../context/GameContext";

function SearchBar() {
  const { search, setSearch } = useContext(GameContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <button className="NavSearch_button">Hola</button>
      <input
        type="text"
        name=""
        className="NavSearch_input"
        value={search}
        onChange={handleSearch}
      />
      <style>
        {`
            .NavSearch_button{
                background-color: white;
            }
            `}
      </style>
    </>
  );
}

export default SearchBar;
