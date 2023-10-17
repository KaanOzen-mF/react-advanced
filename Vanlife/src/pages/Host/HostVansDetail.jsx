import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export default function HostVansDetail() {
  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  //*Params use for when render vans detail page take id
  const params = useParams();
  //*State for vans data, initial value is null because maybe when routes it can not match id
  const [van, setVan] = React.useState(null);

  //*Effect for fetch vans data respectivly vans onwn id
  //*When id change, render every time
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    //* My initial van is null and this situation maybe creates some bug. This
    //*conditional render for to prevent this situation
    <div>
      {van !== null ? (
        <div className="host-vans-detail-container">
          <Link to=".." relative="path" className="back-button">
            <MdKeyboardBackspace size={24} />
            <p>Back to all vans</p>
          </Link>

          <div className="van-info-container">
            <img src={van[0].imageUrl} alt="van-image" />
            <div className="van-info">
              {/*According to vant type class different color shown users*/}
              <i id="van-type" className={`van-type ${van[0].type} selected`}>
                {/*My van type return as a all lowercase, prevent this situation
                write this code*/}
                {van[0].type
                  ? van[0].type.charAt(0).toUpperCase() + van[0].type.slice(1)
                  : ""}
              </i>
              <p>{van[0].name}</p>
              <div className="van-detail-price">
                <p>${van[0].price}</p>
                <span>/day</span>
              </div>
            </div>
          </div>

          <nav className="host-vans-detail-nav">
            <NavLink
              style={({ isActive }) => (isActive ? style : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? style : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? style : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>

          <Outlet context={{ van }} />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
