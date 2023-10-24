import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export default function VansDetail() {
  const location = useLocation();
  //*Params use for when render vans detail page take id
  const params = useParams();
  //*State for vans data, initial value is null because maybe when routes it can not match id
  const [van, setVan] = React.useState([null]);

  //*Effect for fetch vans data respectivly vans onwn id
  //*When id change, render every time
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  return (
    //* My initial van is null and this situation maybe creates some bug. This
    //*conditional render for to prevent this situation
    <div>
      {van ? (
        <div className="van-detail-container">
          <Link to={`/vans/${search}`} className="back-button">
            <MdKeyboardBackspace size={24} />
            {location.state.type ? (
              <p>Back {location.state.type} to vans</p>
            ) : (
              <p>Back to all vans</p>
            )}
          </Link>
          <img className="van-image" src={van.imageUrl} />
          {/*According to vant type class different color shown users*/}
          <i id="van-type" className={`van-type ${van.type} selected`}>
            {/*My van type return as a all lowercase, prevent this situation
            write this code*/}
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
