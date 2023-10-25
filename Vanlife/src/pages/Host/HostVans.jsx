import React from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";

export default function Vans() {
  //*State for keep vans data
  const [vansData, setVansData] = React.useState([]);

  //*State for loading animation or text
  const [loading, setLoading] = React.useState(false);

  //*State for error handling
  const [error, setError] = React.useState(null);

  //*Use effect for fetch api datas, dependency array empty(fetch when render page every time)
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVansData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }
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
