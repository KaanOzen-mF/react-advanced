import React from "react";
import { FaAngleDown, FaAngleUp, FaCirclePlus } from "react-icons/fa6";

export default function MovieCard({ movie }) {
  const [openOverview, setOpenOverview] = React.useState(false);

  const toggleOverview = () => {
    setOpenOverview(!openOverview);
  };

  const addWatchlist = () => {
    // Retrieve existing watchlist from local storage or initialize an empty array
    const existingWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    // Check if the movie is already in the watchlist
    const isAlreadyInWatchlist = existingWatchlist.some(
      (watchedMovie) => watchedMovie.id === movie.id
    );

    if (!isAlreadyInWatchlist) {
      // Add the current movie to the watchlist
      const newMovie = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview,
      };

      const newWatchlist = [...existingWatchlist, newMovie];

      // Save the updated watchlist to local storage
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
      console.log("Movie added to watchlist:", newMovie);
    } else {
      console.log("Movie is already in the watchlist");
    }
  };

  const genreMapping = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const genreTexts = movie.genre_ids.map(
    (genreNumber) => genreMapping[genreNumber]
  );

  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>

        <p>Genres: {genreTexts.join(", ")}</p>
        <FaCirclePlus onClick={addWatchlist} />

        <div className="card--overview">
          <p>Overview</p>
          {openOverview ? (
            <FaAngleUp onClick={toggleOverview} />
          ) : (
            <FaAngleDown onClick={toggleOverview} />
          )}
        </div>
        {openOverview && <p className="card--desc">{movie.overview}</p>}
      </div>
    </div>
  );
}