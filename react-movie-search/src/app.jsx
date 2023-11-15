import React from "react";
import SearchMovies from "./components/movieComponents/SearchMovies";
import SearchSeries from "./components/serieComponents/SearchSeries";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies />
      <h1 className="title">Series Search</h1>
      <SearchSeries />
    </div>
  );
}
