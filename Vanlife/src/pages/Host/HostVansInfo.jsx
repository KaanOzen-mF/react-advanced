import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVansInfo() {
  const { van } = useOutletContext();
  return (
    <div>
      <p className="host-van-info-description">
        <span>Name: </span>
        {van[0].name}
      </p>
      <p className="host-van-info-description">
        <span>Category: </span>
        {van[0].type.charAt(0).toUpperCase() + van[0].type.slice(1)}
      </p>
      <p className="host-van-info-description">
        <span>Description: </span> {van[0].description}
      </p>
      <p className="host-van-info-description">
        <span>Visibility: </span> Public
      </p>
    </div>
  );
}
