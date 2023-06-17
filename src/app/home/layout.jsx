import Navbar from "@/components/navbar/Navbar";
import GameState from "@/context/GameState";
import "/src/styles/globals.scss";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <GameState>{children}</GameState>
    </>
  );
}
