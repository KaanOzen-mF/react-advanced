import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  //*State for keep vans data
  const [vansData, setVansData] = React.useState([]);

  //*Use effect for fetch api datas, dependency array empty(fetch when render page every time)
  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const vansElement = vansData.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id}>
      <div className="host-vans-card">
        <img src={van.imageUrl} alt="" />
        <div>
          <p className="host-vans-name">{van.name}</p>
          <p className="host-vans-detail">{van.description}</p>
          <p className="host-vans-price">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="host-vans-page">
      <h1>Your Listed Vans</h1>
      {vansData.length > 0 ? (
        <div className="host-vans-page">{vansElement}</div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
