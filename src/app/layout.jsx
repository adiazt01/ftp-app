import Navbar from "../components/navbar/Navbar";
import GameState from "../context/GameState";
import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">
        <Navbar />
        <GameState>{children}</GameState>
      </body>
    </html>
  );
}
