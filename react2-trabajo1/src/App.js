import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSearch from "./components/NavbarSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Index";
import Home from "./components/Home/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarSearch />;
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
