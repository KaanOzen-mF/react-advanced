import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=5dcf7f28a88be0edc01bbbde06f024ab`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const revData = data.cast.slice(0, 10);
        setMovieDetails(revData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <p>Movie ID: {id}</p>
      {movieDetails && (
        <div>
          {/* Additional movie details can be displayed here */}
          <ul>
            {movieDetails.map((castMember) => (
              <div className="cast-container" key={castMember.id}>
                <p>{castMember.name}</p>
                <img
                  className="cast--poster"
                  src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                  alt=""
                />
                <p>{castMember.character}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
