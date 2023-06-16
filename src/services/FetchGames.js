async function fetchGames() {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b53d49cf53msha26322b279f75dfp127b3bjsn5d5ba20934db",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    cache: "no-store"
  };
  const res = await fetch(url, options);
  return await res.json()
}

export const gamesPromise = fetchGames();

