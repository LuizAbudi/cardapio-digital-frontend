import React from "react";

interface CardItemProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const CardItem: React.FC<CardItemProps> = ({
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className="p-4 shadow-lg rounded-lg max-w-lg m-4 flex bg-white w-full md:w-1/2 lg:w-1/3">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-bold text-textColor2">
          R${price.toFixed(2).replace(".", ",")}
        </p>
      </div>
      <div className="w-1/2 relative bg-white">
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </div>
  );
};

export default CardItem;
