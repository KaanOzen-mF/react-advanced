import React from "react";

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

export default function Vans() {
  const [vansData, setVansData] = React.useState({});

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data));
  }, []);

  console.log(vansData);
  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>
      <div className="filter-button">
        <ul>
          <li>Simple</li>
          <li>Luxury</li>
          <li>Rugged</li>
        </ul>
        <p>Clear Filters</p>
      </div>
    </div>
  );
}
