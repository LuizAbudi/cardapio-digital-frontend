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
        to="/porcoes"
        className={`${
          location.pathname === "/porcoes"
            ? "text-textColor2"
            : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Porções
      </Link>
      <Link
        to="/bebidas"
        className={`${
          location.pathname === "/bebidas" ? "text-textColor2" : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Bebidas
      </Link>
      <Link
        to="/drinks"
        className={` ${
          location.pathname === "/drinks" ? "text-textColor2" : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Drinks
      </Link>
      <Link
        to="/doses"
        className={` ${
          location.pathname === "/doses" ? "text-textColor2" : "text-white"
        } font-bold text-base md:text-xl`}
      >
        Doses
      </Link>
    </div>
  );
};

export default Navigation;
