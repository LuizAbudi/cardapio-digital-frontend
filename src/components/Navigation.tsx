import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center p-4 space-x-3 max-w-lg w-full md:w-1/2 lg:w-1/3">
      <Link
        to="/"
        className={`${
          location.pathname === "/" ? "text-textColor2" : "text-white"
        }  font-bold text-base md:text-xl `}
      >
        Home
      </Link>
      <Link
        to="/Porções"
        className={`${
          location.pathname === "/Por%C3%A7%C3%B5es"
            ? "text-textColor2"
            : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Porções
      </Link>
      <Link
        to="/Bebidas"
        className={`${
          location.pathname === "/Bebidas" ? "text-textColor2" : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Bebidas
      </Link>
      <Link
        to="/Drinks"
        className={` ${
          location.pathname === "/Drinks" ? "text-textColor2" : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Drinks
      </Link>
      <Link
        to="/Doses"
        className={` ${
          location.pathname === "/Doses" ? "text-textColor2" : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Doses
      </Link>
    </div>
  );
};

export default Navigation;
