import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center p-4 space-x-4">
      <Link
        to="/"
        className={`text-white font-bold text-xl md:text-2xl ${
          location.pathname === "/" ? "text-textColor2" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/Porções"
        className={`text-white font-bold text-xl md:text-2xl ${
          location.pathname === "/Porções" ? "text-textColor2" : ""
        }`}
      >
        Porções
      </Link>
      <Link
        to="/Bebidas"
        className={`text-white font-bold text-xl md:text-2xl ${
          location.pathname === "/Bebidas" ? "text-textColor2" : ""
        }`}
      >
        Bebidas
      </Link>
      <Link
        to="/Drinks"
        className={`text-white font-bold text-xl md:text-2xl ${
          location.pathname === "/Drinks" ? "text-textColor2" : ""
        }`}
      >
        Drinks
      </Link>
    </div>
  );
};

export default Navigation;
