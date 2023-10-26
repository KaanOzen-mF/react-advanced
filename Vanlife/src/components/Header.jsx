import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { RiLogoutBoxFill } from "react-icons/ri";

//* Link elements for helping render and routing another pages

export default function Header() {
  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to="/host">
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? style : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to="/vans">
          Vans
        </NavLink>
        <Link to="login">
          <RxAvatar />
        </Link>
        <Link to="login" onClick={fakeLogOut()}>
          <RiLogoutBoxFill />
        </Link>
      </nav>
    </header>
  );
}
