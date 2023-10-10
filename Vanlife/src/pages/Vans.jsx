import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vansData, setVansData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  /**
   * Challenge: Wrap the contents of the "van-tile" div in a
   * Link that sends the user to `/vans/${van-id-here}`.
   */

  const vanElements = vansData.map((van) => (
    <div key={van.id} className="card">
      <Link to={`/vans/${van.id}`} className="card">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <div className="price-container">
            <p>${van.price}</p>
            <span className="day">/day</span>
          </div>
        </div>
        <i className={`van-type ${van.type} selected`}>
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </i>
      </Link>
    </div>
  ));

  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>

      <div className="filter-container">
        <ul className="filter-buttons">
          <li>Simple</li>
          <li>Luxury</li>
          <li>Rugged</li>
        </ul>
        <p>Clear Filters</p>
      </div>

      <div className="card-container">{vanElements}</div>
    </div>
  );
}
