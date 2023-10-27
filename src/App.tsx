import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Porcoes from "./pages/Porcoes";
import Bebidas from "./pages/Bebidas";
import Drinks from "./pages/Drinks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Porções" element={<Porcoes />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Drinks" element={<Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
