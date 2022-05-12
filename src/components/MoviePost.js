import { useParams } from "react-router-dom";
import data from "../db";
import "./MoviePost.css";

const { movies } = data;
function MoviePost(props) {
  let { id } = useParams();
  const movie = movies.find((movie) => movie.id == id);

  return props.trigger ? (
    <div className="container-movie-post">
      <div className="movie-post">
        <h3 className="title-post">Detail</h3>
        <p className="plot-post">{movie.plot}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MoviePost;
