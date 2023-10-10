import React from "react";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export default function VansDetail() {
  const params = useParams();
  const [van, setVan] = React.useState([null]);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  console.log(van);

  return (
    <div>
      {van ? (
        <div className="van-detail-container">
          <Link to="/vans" className="back-button">
            <MdKeyboardBackspace size={24} />
            <p>Back to all vans</p>
          </Link>
          <img className="van-image" src={van.imageUrl} />
          <i id="van-type" className={`van-type ${van.type} selected`}>
            {van.type
              ? van.type.charAt(0).toUpperCase() + van.type.slice(1)
              : ""}
          </i>
          <p className="van-title">{van.name}</p>

          <div className="van-detail-price">
            <p>${van.price}</p>
            <span>/day</span>
          </div>

          <p className="van-description">{van.description}</p>
          <button className="van-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
