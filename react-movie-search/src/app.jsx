import React from "react";
import SearchMovies from "./components/movieComponents/SearchMovies";
import SearchSeries from "./components/serieComponents/SearchSeries";
import MovieDetail from "./components/movieComponents/MovieDetail";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/series" element={<SearchSeries />} />
      </Routes>
    </Router>
  );
}
