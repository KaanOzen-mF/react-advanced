import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "./assets/search-icon.svg";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

export default function Layout() {
  const [poularMovie, setPopularMovie] = React.useState(null);
  const [topRatedMovie, setTopRatedMovie] = React.useState(null);
  const [upcomingMovie, setUpcomingMovie] = React.useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovieUrl =
          "https://api.themoviedb.org/3/movie/popular?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&page=1";

        const res = await fetch(popularMovieUrl);
        const data = await res.json();
        setPopularMovie(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    const fetchTopRatedMovies = async () => {
      const topRatedMoviesUrl =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&page=1";
      try {
        const res = await fetch(topRatedMoviesUrl);
        const data = await res.json();
        setTopRatedMovie(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchUpcomingMovies = async () => {
      try {
        const upcomingMovieUrl =
          "https://api.themoviedb.org/3/movie/upcoming?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&page=1";
        const res = await fetch(upcomingMovieUrl);
        const data = await res.json();
        setUpcomingMovie(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopRatedMovies();
    fetchPopularMovies();
    fetchUpcomingMovies();
  }, []);

  const popularMovies = poularMovie?.map((i) => {
    return (
      <div className="card">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${i.poster_path}`}
          alt={i.title + " poster"}
        />
        <div className="card--content">
          <h3 className="card--title">{i.title}</h3>
          <p className="card--release">
            <small>RELEASE DATE:</small> {i.release_date}
          </p>
          <p className="card--rating">
            <small> RATING: </small>
            {i.vote_average}
          </p>
        </div>
      </div>
    );
  });

  const topRatedMovies = topRatedMovie?.map((i) => {
    return (
      <div className="card" key={i.id}>
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${i.poster_path}`}
          alt={`${i.title} poster`}
        />
        <div className="card--content">
          <h3 className="card--title">{i.title}</h3>
          <p>
            <small>RELEASE DATE: {i.release_date}</small>
          </p>
          <p>
            <small>RATING: {i.vote_average}</small>
          </p>
        </div>
      </div>
    );
  });

  const upcomingMovies = upcomingMovie?.map((i) => {
    return (
      <div className="card" key={i.id}>
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${i.poster_path}`}
          alt={`${i.title} poster`}
        />
        <div className="card--content">
          <h3 className="card--title">{i.title}</h3>
          <p>
            <small>RELEASE DATE: {i.release_date}</small>
          </p>
          <p>
            <small>RATING: {i.vote_average}</small>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="home-container">
      <div className="header-container">
        <h1 className="header-title">MovieSphere</h1>
      </div>
      <div className="button-container">
        <Link className="title" to="/movies">
          <img src={SearchIcon} alt="" />
          Movie Search
        </Link>
        <Link className="title" to="/series">
          <img src={SearchIcon} alt="" />
          Series Search
        </Link>
      </div>
      <div className="watchlist-button-container">
        <Link className="title" to="/watchlist">
          <MdOutlinePlaylistAddCheck />
          <p>Watchlist</p>
        </Link>
      </div>

      <h1 className="layout-title">Popular Movies</h1>
      <div className="layout-card">{popularMovies}</div>
      <h1 className="layout-title">Top Rated Movies</h1>
      <div className="layout-card">{topRatedMovies}</div>
      <h1 className="layout-title">Upcoming Movies</h1>
      <div className="layout-card">{upcomingMovies}</div>

      <footer>
        <p className="footer-text">Kaan Ozen &#169; 2023</p>
      </footer>
    </div>
  );
}
