import React from "react";

export default function MovieCard({
  movieId,
  moviePoster,
  movieTitle,
  releaseDate,
  rating,
  overview,
}) {
  return (
    <div className="card" key={movieId}>
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${moviePoster}`}
        alt={movieTitle + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movieTitle}</h3>
        <p>
          <small>RELEASE DATE: {releaseDate}</small>
        </p>
        <p>
          <small>RATING: {rating}</small>
        </p>
        <p className="card--desc">{overview}</p>
      </div>
    </div>
  );
}
