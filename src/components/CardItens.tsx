import React from "react";

interface CardItemProps {
  name: string;
  description: string;
  price?: number;
  subPrice?: number;
  imageUrl: string;
  size?: string;
  subCategory?: string;
  pricePromotion?: number;
}

const CardItem: React.FC<CardItemProps> = ({
  name,
  description,
  price,
  subPrice,
  imageUrl,
  size,
  subCategory,
  pricePromotion,
}) => {

  const formattedPrice = (
    <div>
      <p>Inteira: R$ {price?.toFixed(2).replace(".", ",")}</p>
      {subPrice && <p>Meia: R$ {subPrice.toFixed(2).replace(".", ",")}</p>}
    </div>
  );

  const formattedPrice2 = (
    <div>
      <p>R$ {price?.toFixed(2).replace(".", ",")}</p>  
    </div>
  );

  const whitchPrice = () => {    
      if (subPrice) {
        return formattedPrice;
      }
      return formattedPrice2;   
  }

  const formattedPricePromotion = () => {
    if (pricePromotion) {
      return (
        <div>
          <p className="text-decoration-line: line-through">
            {`R$${price?.toFixed(2).replace(".", ",")}`}
          </p>
          <p>
            {`R$${pricePromotion.toFixed(2).replace(".", ",")}`}
          </p>
        </div>
      );
    }
    return whitchPrice();
  }

  return (
    <div className="p-4 shadow-lg rounded-lg max-w-lg m-4 flex bg-white w-full md:w-1/2 lg:w-1/3">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-bold text-textColor2">       
          {whitchPrice() ? formattedPricePromotion() : whitchPrice()}
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
