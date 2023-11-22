import React from "react";
import { FaAngleDown, FaAngleUp, FaCirclePlus } from "react-icons/fa6";

export default function SerieCard({ serie }) {
  const [openOverview, setOpenOverview] = React.useState(false);

  const toggleOverview = () => {
    setOpenOverview(!openOverview);
  };

  const addWatchlist = () => {
    // Retrieve existing watchlist from local storage or initialize an empty array
    const existingWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    // Check if the serie is already in the watchlist
    const isAlreadyInWatchlist = existingWatchlist.some(
      (watchedserie) => watchedserie.id === serie.id
    );

    if (!isAlreadyInWatchlist) {
      // Add the current serie to the watchlist
      const newserie = {
        id: serie.id,
        title: serie.original_name,
        poster_path: serie.poster_path,
        release_date: serie.first_air_date,
        vote_average: serie.vote_average,
        overview: serie.overview,
      };

      const newWatchlist = [...existingWatchlist, newserie];

      // Save the updated watchlist to local storage
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
      console.log("serie added to watchlist:", newserie);
    } else {
      console.log("serie is already in the watchlist");
    }
  };

  const genreMapping = {
    10759: "Action & Adventure",
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
    10770: "TV serie",
    53: "Thriller",
    10768: "War & Politics",
    37: "Western",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
  };

  const genreTexts = serie.genre_ids.map(
    (genreNumber) => genreMapping[genreNumber]
  );

  return (
    <div className="movie-card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${serie.poster_path}`}
        alt={serie.title + " poster"}
      />
      <div className="movie--card--content">
        <h3 className="card--title">{serie.title}</h3>
        <p>
          <small>RELEASE DATE: {serie.release_date}</small>
        </p>
        <p>
          <small>RATING: {serie.vote_average}</small>
        </p>

        <p>Genres: {genreTexts.join(", ")}</p>
        <FaCirclePlus size={24} onClick={addWatchlist} />

        <div className="card--overview">
          <p>Overview</p>
          {openOverview ? (
            <FaAngleUp size={18} onClick={toggleOverview} />
          ) : (
            <FaAngleDown size={18} onClick={toggleOverview} />
          )}
        </div>
        {openOverview && <p className="card--desc">{serie.overview}</p>}
      </div>
    </div>
  );
}
