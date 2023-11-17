import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex flex-wrap justify-center items-center p-4 space-y-3 md:space-y-0 max-w-screen-xl mx-auto xl:w-1/2">
      <Link
        to="/"
        className={`${
          location.pathname === "/"
            ? "text-textColor2 bg-white bg-opacity-25 md:w-auto px-4 py-2 rounded-md"
            : "text-white"
        } font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow md:w-1/6 text-center md:flex-none flex-shrink-0`}
      >
        Home
      </Link>
      <Link
        to="/porcoes"
        className={`${
          location.pathname === "/porcoes"
            ? "text-textColor2 bg-white bg-opacity-25 px-4 py-2 rounded-md md:w-auto"
            : "text-white"
        } font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow md:w-1/6 text-center md:flex-none`}
      >
        Porções
      </Link>
      <Link
        to="/bebidas"
        className={`${
          location.pathname === "/bebidas"
            ? "text-textColor2 bg-white bg-opacity-25 px-4 py-2 rounded-md md:w-auto"
            : "text-white"
        } font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow md:w-1/6 text-center md:flex-none`}
      >
        Bebidas
      </Link>
      <Link
        to="/drinks"
        className={` ${
          location.pathname === "/drinks"
            ? "text-textColor2 bg-white bg-opacity-25 px-4 py-2 rounded-md md:w-auto"
            : "text-white"
        } font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow md:w-1/6 text-center md:flex-none`}
      >
        Drinks
      </Link>
      <Link
        to="/doses"
        className={` ${
          location.pathname === "/doses"
            ? "text-textColor2 bg-white bg-opacity-25 px-4 py-2 rounded-md md:w-auto"
            : "text-white"
        } font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow  text-center md:flex-none`}
      >
        Doses
      </Link>
      <Link
        to="/promocoes"
        className={` ${
          location.pathname === "/promocoes"
            ? "text-textColor2 bg-white bg-opacity-25 px-4 py-2 rounded-md md:w-auto"
            : "text-white"
        } font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow  text-center md:flex-none`}
      >
        Promoções
      </Link>
    </div>
  );
};

export default Navigation;
