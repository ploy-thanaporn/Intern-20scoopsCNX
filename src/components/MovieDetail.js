import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../components/MovieDetail.css";
import data from "../db";
import Image from "./img";
import "./MovieList";
import MoviePost from "./MoviePost";

function MovieDetail(props) {
  const { movies } = data;
  const [post, setMoviePost] = useState(false);

  let navigate = useNavigate();
  function backClick() {
    navigate("/movie-list");
  }

  // params ได้ข้อมูลเป็น string เสมอ
  let { id } = useParams();
  const movie = movies.find((movie) => movie.id == id);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setMoviePost(false);
    });
  });

  return (
    <div className="container-detail">
      <div className="card-head">
        <p className="title">{movie.title}</p>
        <div className="container-img">
          <Image src={movie.posterUrl} fallbackSrc="/image/movie-null.jpg" />
        </div>
      </div>
      <div className="container-content">
        <div className="card-content">
          <div className="gap-content">
            <span className="head-content">Relased on</span>
            <br />
            <span className="sub-content">{movie.year}</span>
          </div>
          <div className="gap-content">
            <span className="head-content">Run time</span>
            <br />
            <span className="sub-content">{movie.year}</span>
          </div>
          <div className="gap-content">
            <span className="head-content">Director</span>
            <br />
            <span className="sub-content">{movie.director}</span>
          </div>
        </div>
        <div className="btn">
          <button className="btn-view" onClick={() => setMoviePost(true)}>
            View Detail
          </button>
          <MoviePost trigger={post} />
          <button className="btn-back" onClick={backClick}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
