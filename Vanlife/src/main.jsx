import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VansDetail from "./pages/VansDetail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes element for routing betweeen pages */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
        </Route>
      </Routes>

      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
