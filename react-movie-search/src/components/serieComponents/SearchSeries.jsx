import React from "react";
import SerieCard from "./SerieCard";
import { FaStepBackward } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function SearchSeries() {
  const [query, setQuery] = React.useState("");
  const [serie, setSerie] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const searchSeries = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=5dcf7f28a88be0edc01bbbde06f024ab&include_adult=false&language=en-US&page=1`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      // Update the state with the search results
      setSerie(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`search-container ${serie.length > 0 ? "results" : ""}`}>
      <form className="form" onSubmit={searchSeries}>
        <div className="search-bar-nav">
          <Link to="..">
            <FaStepBackward size={38} color="white" />
          </Link>
          <input
            type="text"
            placeholder="i.e. Breaking Bad"
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
          {serie
            .filter((serie) => serie.poster_path)
            .map((serie) => (
              <SerieCard serie={serie} key={serie.id} />
            ))}
        </div>
      )}
    </div>
  );
}
