import Navbar from "./components/navbar/Navbar";
import GameState from "./context/games/GameState";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GameState>
        <body className="App">
          <Navbar />
          {children}
        </body>
      </GameState>
    </html>
  );
}
