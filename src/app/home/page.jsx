"use client";

import SearchBar from "@/components/SearchBar";
import useIntersection from "@/hooks/useIntersection";
import GameContainer from "/src/components/container/GameContainer";

function Home() {
  const { load, limit } = useIntersection();
  return (
    <>
      <SearchBar />
      <GameContainer load={load}></GameContainer>
      <div ref={limit}></div>
    </>
  );
}

export default Home;
