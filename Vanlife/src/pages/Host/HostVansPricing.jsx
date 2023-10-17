import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVansPricing() {
  const { van } = useOutletContext();

  return (
    <div>
      <p className="host-vans-price">${van[0].price}/day</p>
    </div>
  );
}
