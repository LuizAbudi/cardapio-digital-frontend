import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CardComponent({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  const [animateText, setAnimateText] = useState(false);
  const navigate = useNavigate();

  const handleClick = (title: string) => {
    setAnimateText(true);
    setTimeout(() => {
      setAnimateText(false);
      if (title === "Porções") title = "porcoes";
      else if (title === "Bebidas") title = "bebidas";
      else if (title === "Drinks") title = "drinks";
      else if (title === "Doses") title = "doses";
      navigate(`/${title}`);
    }, 1000);
  };

  return (
    <button
      onClick={() => handleClick(title)}
      className="focus:outline-none focus:shadow-outline rounded-xl relative overflow-hidden transform transition-transform duration-300"
    >
      <div className="absolute flex items-center justify-center w-full h-full bg-black/30 rounded-xl text-white ">
        <p
          className={`font-bold text-2xl text-center ${
            animateText ? "animate-bounce" : ""
          }`}
        >
          {title}
        </p>
      </div>
      <img
        className="single-image w-full h-full object-cover rounded-xl"
        src={imageUrl}
        alt={title}
      />
    </button>
  );
}

export default CardComponent;
