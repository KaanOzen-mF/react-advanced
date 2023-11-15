import React from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies(props) {
  const [query, setQuery] = React.useState("");
  const [movie, setMovie] = React.useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query">Movie Name</label>
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

        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {movie
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              movieId={movie.id}
              moviePoster={movie.poster_path}
              movieTitle={movie.title}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </div>
    </>
  );
}
