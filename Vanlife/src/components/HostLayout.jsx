import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink style={({ isActive }) => (isActive ? style : null)} to="." end>
          Dashoard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? style : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? style : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? style : null)} to="vans">
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
