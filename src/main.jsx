import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Link className="site-logo" to={"/"}>
            #VANLIFE
          </Link>
          <nav className="nav">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
            <Link className="nav-link" to={"/"}>
              Vans
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
