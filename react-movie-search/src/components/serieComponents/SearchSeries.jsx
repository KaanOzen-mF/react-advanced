import React from "react";
import SerieCard from "./SerieCard";

export default function SearchSeries() {
  const [query, setQuery] = React.useState("");
  const [serie, setSerie] = React.useState([]);

  const searchSeries = async (e) => {
    e.preventDefault();
    console.log("submitting");
    try {
      const url = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=5dcf7f28a88be0edc01bbbde06f024ab&include_adult=false&language=en-US&page=1`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      // Update the state with the search results
      setSerie(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchSeries}>
        <label htmlFor="query">Serie Name</label>
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

        <button type="submit" className="button">
          Search
        </button>
      </form>

      {/* Display search results */}
      <div className="card-list">
        {serie.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </div>
    </>
  );
}
