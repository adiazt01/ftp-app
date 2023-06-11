import Image from "next/image";

async function fetchSingleGame(id) {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b53d49cf53msha26322b279f75dfp127b3bjsn5d5ba20934db",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      cache: "no-store",
    },
  };
  const res = await fetch(url, options);
  return await res.json();
}

export default async function Page({ params }) {
  const { id } = params;
  const game = await fetchSingleGame(id);
  const {
    title,
    thumbnail,
    genre,
    description,
    game_url,
    platform,
    developer,
    release_date,
  } = game;

  return (
    <section className="GameSection">
      <div className="GameSection__cover">
        <Image
          alt={title}
          src={thumbnail}
          width={366}
          priority={true}
          height={207}
          className="GGameSection__cover_gameimg"
        />
        <h2 className="GameSection__cover_title">{title}</h2>
        <button className="GameSection__cover_viewGame">
          <a href={game_url} className="GameSection__cover_viewGame_link">
            Ver juego
          </a>
        </button>
      </div>

      <div className="GameSection__info">
        <h3 className="GameSection__info_subtitle">Sobre {title}</h3>
        <p className="GameSection__info_about">{description}</p>
        <h3 className="GameSection__info_subtitle">Informacion adicional</h3>

        <table className="GameSection__table">
          <thead className="GameSection__table_head">
            <tr>
              <th className="GameSection__table_head_th">Nombre</th>
              <th className="GameSection__table_head_th">Plataforma</th>
              <th className="GameSection__table_head_th">genero</th>
              <th className="GameSection__table_head_th">Desarrolladora</th>
              <th className="GameSection__table_head_th">Publicacion</th>
            </tr>
          </thead>
          <tbody className="GameSection__table_body">
            <tr>
              <td className="GameSection__table_body_row">
                {title != null ? title : "No encontrado"}
              </td>
              <td className="GameSection__table_body_row">
                {platform != null ? platform : "No encontrado"}
              </td>
              <td className="GameSection__table_body_row">
                {genre != null ? genre : "No encontrado"}
              </td>
              <td className="GameSection__table_body_row">
                {developer != null ? developer : "No encontrado"}
              </td>
              <td className="GameSection__table_body_row">
                {release_date != null ? release_date : "No encontrado"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>{`
        .GameSection {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin: auto;
        }

        .GameSection__cover {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          align-items: center;
        }

        .GGameSection__cover_gameimg {
          margin-top: 10px;
        }

        .GameSection__cover_title {
          margin-top: 25px;
          font-weight: 600;
          text-align: center;
          font-size: 35px;
        }

        .GameSection__cover_viewGame {
          background-color: black;
          width: 80%;
          height: 2em;
          max-width: 300px;
          font-size: 1.3rem;
          border-radius: 20px;
          border: 0px;
          margin-top: 15px;
        }

        .GameSection__cover_viewGame_link {
          color: white;
          text-decoration: none;
        }

        .GameSection__info {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          width: 70%;
        }

        .GameSection__info_about{
          font-size: 1.2em;
        }

        .GameSection__table {
          width: 100%;
          table-layout: fixed;
          word-break: break-word;
          border-collapse: collapse;
          font-size: 0.9em;
        }

        .GameSection__info_subtitle{
          text-align: left;   
          font-size: 1.8em;
          font-weight: 600;
          margin: 15px 0px 15px;      
        }

        .GameSection__table_head_th {
          text-align: center;
          font-weight: 600;
        }

        .GameSection__table_body_row {
          text-align: center;
        }

        @media (min-width: 768px) {
          .GameSection{
            flex-direction: row;
            justify-content: space-evenly;
            align-items: start;
          }

          .GameSection__cover{
            top: 100px;
            position: sticky;
          }

          .GameSection__cover{
            width: 30%;
          }

          .GameSection__info{
            width: 50%;
          }

          .GameSection__table{
            table-layout: fixed;
            max-width:650px;
            margin: auto;
            font-size: 1.1em;
          }
        }
        
      `}</style>
    </section>
  );
}
