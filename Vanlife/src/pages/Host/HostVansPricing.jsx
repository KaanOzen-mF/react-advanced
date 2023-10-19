import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVansPricing() {
  const { van } = useOutletContext();

  return (
    <div>
      <p className="host-vans-pricing">
        ${van[0].price}
        <span className="host-vans-day">/day</span>
      </p>
    </div>
  );
}
