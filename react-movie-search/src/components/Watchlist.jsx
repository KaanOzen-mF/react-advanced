import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaStepBackward } from "react-icons/fa";
export default function Watchlist() {
  // State to hold the retrieved data
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    // Function to retrieve data from local storage
    const fetchDataFromLocalStorage = () => {
      // Retrieve the stored data from local storage
      const storedData = localStorage.getItem("watchlist");

      // Parse the stored data (assumes it was stored as a JSON string)
      const parsedData = JSON.parse(storedData);

      // Update the state with the retrieved data
      setMyData(parsedData);
    };

    // Call the function to retrieve data when the component mounts
    fetchDataFromLocalStorage();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const removeMovie = (id) => {
    // Filter out the movie with the specified id
    const updatedWatchlist = myData.filter((movie) => movie.id !== id);

    // Update local storage with the new watchlist data
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

    // Update state with the new watchlist data
    setMyData(updatedWatchlist);
  };

  // Check if myData is not null before mapping over it
  const watchlist = myData
    ? myData.map((movie) => (
        <div key={movie.id} className="watchlist-card">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + " poster"}
          />
          <h3 className="watchlist--card--title">{movie.title}</h3>
          <p>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p>
            <small>RATING: {movie.vote_average}</small>
          </p>

          <IoMdRemoveCircle size={24} onClick={() => removeMovie(movie.id)} />

          <div className="watchlist--card--overview">
            <p className="overview--title">Overview</p>
            <p className="overview--card--desc">{movie.overview}</p>
          </div>
        </div>
      ))
    : null;

  return (
    <div className="watchlist">
      <Link to=".." className="back-btn">
        <FaStepBackward size={38} color="white" />
      </Link>
      {watchlist && watchlist.length > 0 ? (
        <div className="watchlist-container">{watchlist}</div>
      ) : (
        <div className="add-watchlist-container">
          <Link to="/">
            <FaCirclePlus size={24} />
          </Link>
          <p>There is no movie here... Let's Add!</p>
        </div>
      )}
    </div>
  );
}
