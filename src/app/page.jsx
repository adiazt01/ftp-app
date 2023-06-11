"use client";

import { useState, useRef, useEffect, useContext } from "react";
import GameContainer from "./components/container/GameContainer";
import SearchBar from "./components/SearchBar";
import GameContext from "./context/GameContext"; 

function Posts() {
  const [visible, setVisible] = useState(false);
  const [load, setLoad] = useState(16);
  const limit = useRef(null);
  const {games} = useContext(GameContext)

  useEffect(() => {
    const oberver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: "100px",
      }
    );
    oberver.observe(limit.current);
    return () => oberver.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      setLoad((load) => load + 12);
    }
  }, [visible]);

  return (
    <>
      <SearchBar />
      <GameContainer load={load}></GameContainer>
      <div ref={limit}></div>
    </>
  );
}

export default Posts;
