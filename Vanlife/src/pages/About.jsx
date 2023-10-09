import React from "react";
export default function About() {
  return (
    <div className="about-page-container">
      <img src="./src/assets/images/home-hero.png" alt="" />
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p className="second-paragraph">
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      <div className="van-card">
        <p>
          Your destination is waiting.
          <br />
          Your van is ready.
        </p>
        <button>Explore our vans</button>
      </div>
    </div>
  );
}
