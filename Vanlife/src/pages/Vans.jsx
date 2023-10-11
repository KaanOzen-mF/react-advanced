import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  //*State for keep vans data
  const [vansData, setVansData] = React.useState([]);

  //*Use effect for fetch api datas, dependency array empty(fetch when render page every time)
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  //*Map my vans data for render JSX elements
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
        {/*According to vant type class different color shown users*/}
        <i className={`van-type ${van.type} selected`}>
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
          {/*My van type return as a all lowercase, prevent this situation
            write this code*/}
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
