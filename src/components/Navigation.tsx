import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center p-4 space-x-4">
      <Link
        to="/"
        className={`${
          location.pathname === "/" ? "text-textColor2" : "text-white"
        }  font-bold text-xl md:text-2xl `}
      >
        Home
      </Link>
      <Link
        to="/Porções"
        className={`${
          location.pathname === "/Por%C3%A7%C3%B5es"
            ? "text-textColor2"
            : "text-white"
        } font-bold text-xl md:text-2xl`}
      >
        Porções
      </Link>
      <Link
        to="/Bebidas"
        className={`${
          location.pathname === "/Bebidas" ? "text-textColor2" : "text-white"
        } font-bold text-xl md:text-2xl`}
      >
        Bebidas
      </Link>
      <Link
        to="/Drinks"
        className={` ${
          location.pathname === "/Drinks" ? "text-textColor2" : "text-white"
        } font-bold text-xl md:text-2xl`}
      >
        Drinks
      </Link>
      <Link
        to="/Doses"
        className={` ${
          location.pathname === "/Doses" ? "text-textColor2" : "text-white"
        } font-bold text-xl md:text-2xl`}
      >
        Doses
      </Link>
    </div>
  );
};

export default Navigation;
