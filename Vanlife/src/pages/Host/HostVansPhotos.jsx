import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVansPhotos() {
  const { van } = useOutletContext();
  return (
    <div>
      <img src={van[0].imageUrl} className="host-vans-photos" />
    </div>
  );
}
