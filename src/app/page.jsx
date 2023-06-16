"use client";

import GameContainer from "../components/container/GameContainer";
import SearchBar from "../components/SearchBar";
import useIntersection from "../hooks/useIntersection";

function Posts() {
  const {load, limit} = useIntersection()

  return (
    <>
      <SearchBar />
      <GameContainer load={load}></GameContainer>
      <div ref={limit}></div>
    </>
  );
}

export default Posts;
