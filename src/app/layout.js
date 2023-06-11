import Navbar from "./components/navbar/Navbar";
import GameState from "./context/GameState";
import "./globals.css";

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
