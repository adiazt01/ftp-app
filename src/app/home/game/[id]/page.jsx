import Image from "next/image";
import fetchSingleGame from "@/services/FetchSingleGame";
import '@/styles/GamePage.scss'

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
      <div className="cover">
        <Image
          alt={title}
          src={thumbnail}
          width={366}
          priority={true}
          height={207}
          className="gameimg"
        />
        <h2 className="title">{title}</h2>
        <button className="viewGame">
          <a href={game_url} className="link">
            Ver juego
          </a>
        </button>
      </div>

      <div className="info">
        <h3 className="subtitle">Sobre {title}</h3>
        <p className="about">{description}</p>
        <h3 className="subtitle">Informacion adicional</h3>

        <table className="table">
          <thead className="head">
            <tr>
              <th className="th">Nombre</th>
              <th className="th">Plataforma</th>
              <th className="th">genero</th>
              <th className="th">Desarrolladora</th>
              <th className="th">Publicacion</th>
            </tr>
          </thead>
          <tbody className="body">
            <tr>
              <td className="row">
                {title != null ? title : "No encontrado"}
              </td>
              <td className="row">
                {platform != null ? platform : "No encontrado"}
              </td>
              <td className="row">
                {genre != null ? genre : "No encontrado"}
              </td>
              <td className="row">
                {developer != null ? developer : "No encontrado"}
              </td>
              <td className="row">
                {release_date != null ? release_date : "No encontrado"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
