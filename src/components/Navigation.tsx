import React from "react";
import { Link, useLocation } from "react-router-dom";

const linkStyles = {
  default: "text-white postion-absolute",
  active: "text-textColor2 bg-white bg-opacity-25",
  common:
    "font-bold text-base md:text-xl px-4 py-2 rounded-md flex-grow  text-center md:flex-none",
};

const Navigation = () => {
  const location = useLocation();

  const getLinkClass = (path: any) => {
    return location.pathname === path
      ? `${linkStyles.active} ${linkStyles.common}`
      : `${linkStyles.default} ${linkStyles.common}`;
  };

  return (
    <div className="flex flex-wrap justify-center m-4 items-center p-4 max-w-screen-xl mx-auto xl:w-1/2">
      <Link to="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link to="/porcoes" className={getLinkClass("/porcoes")}>
        Porções
      </Link>
      <Link to="/bebidas" className={getLinkClass("/bebidas")}>
        Bebidas
      </Link>
      <Link to="/drinks" className={getLinkClass("/drinks")}>
        Drinks
      </Link>
      <Link to="/doses" className={getLinkClass("/doses")}>
        Doses
      </Link>
      <Link to="/promocoes" className={getLinkClass("/promocoes")}>
        Promoções
      </Link>
    </div>
  );
};

export default Navigation;
