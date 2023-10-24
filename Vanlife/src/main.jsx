import React from "react";
import "./server";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VansDetail from "./pages/Vans/VansDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import HostVansPricing from "./pages/Host/HostVansPricing";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPhotos from "./pages/Host/HostVansPhotos";
import ErrorPage from "./pages/ErrorPage";

import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes element for routing betweeen pages */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />

          <Route path="vans/:id" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVansInfo />} />
              <Route path="pricing" element={<HostVansPricing />} />
              <Route path="photos" element={<HostVansPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
