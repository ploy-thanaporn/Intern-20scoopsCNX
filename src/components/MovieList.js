import { Link } from "react-router-dom";
import data from "../db.js";
import Image from "./img.js";
import "./MovieList.css";

function MovieList() {
  const { movies } = data;

  const movieItems = movies.map((movie) => (
    <Link to={`/movie-detail/${movie.id}`} className="link-item" key={movie.id}>
      <div className="item">
        <p className="movie-name">{movie.title}</p>
        <p className="movie-year">{movie.year}</p>
        <Image src={movie.posterUrl} fallbackSrc="/image/movie-null.jpg" />
      </div>
    </Link>
  ));

  return <div className="movie-list"> {movieItems} </div>;
}

export default MovieList;
