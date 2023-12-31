import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

import { FaStepBackward } from "react-icons/fa";

export default function SearchMovies() {
  const [query, setQuery] = React.useState("");
  const [movie, setMovie] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`search-container ${movie.length > 0 ? "results" : ""}`}>
      <form className="form" onSubmit={searchMovies}>
        <div className="search-bar-nav">
          <Link to="..">
            <FaStepBackward size={38} color="white" />
          </Link>
          <input
            type="text"
            placeholder="i.e. Lord of the Rings"
            name="query"
            className="input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loader">
          <div className="loader-filmstrip"></div>
          <p className="loader-text">Loading</p>
        </div>
      ) : (
        <div className="card-list">
          {movie
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      )}
    </div>
  );
}
