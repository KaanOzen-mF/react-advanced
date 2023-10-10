import React from "react";
import { useParams } from "react-router-dom";

export default function VansDetail() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <p>Vans Detail</p>
    </div>
  );
}
