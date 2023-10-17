import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VansDetail from "./pages/Vans/VansDetail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
/**
 * Challenge: add the /host/vans and /host/vans/:id routes, as well
 * as the "Vans" link in the Host navbar.
 *
 * For now, just create the stubbed-out version of the pages (i.e.
 * components that just render an <h1>). Don't worry about adding
 * navigation from /host/vans to /host/vans/:id yet - the link to
 * /host/vans is enough for now.
 *
 * When deciding whether or not to use nested routes, keep in mind
 * what will/won't be shared between these two pages. See the Figma
 * design file (or the screenshots) to help guide your choice.
 */
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
            <Route path="vans/:id" element={<HostVansDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
