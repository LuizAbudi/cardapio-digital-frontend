import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./CardItens";

const Itens = ({ type }: { type: string }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/itens");
        setData(result.data);
      } catch (error) {
        console.error("Erro no get dos dados", error);
      }
    };
    fetchData();
  }, []);

  const Porcoes = () => {
    if (type === "Porções") {
      return (
        <div>
          {data
            .filter((item) => item.category === "Porções")
            .map((item) => (
              <CardItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.image}
              />
            ))}
        </div>
      );
    }
    return null;
  };

  const Bebidas = () => {
    if (type === "Bebidas") {
      return (
        <div className="flex flex-wrap -m-4 justify-center md: -m-2">
          {data
            .filter((item) => item.category === "Bebidas")
            .map((item) => (
              <CardItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.image}
              />
            ))}
        </div>
      );
    }
    return null;
  };

  const Drinks = () => {
    if (type === "Drinks") {
      return (
        <div>
          {data
            .filter((item) => item.category === "Drinks")
            .map((item) => (
              <CardItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.image}
              />
            ))}
        </div>
      );
    }
    return null;
  };

  const returnComponent = () => {
    if (type === "Porções") {
      return <Porcoes />;
    }
    if (type === "Bebidas") {
      return <Bebidas />;
    }
    if (type === "Drinks") {
      return <Drinks />;
    }
    return null;
  };

  return (
    <div>
      <ul>{returnComponent()}</ul>
    </div>
  );
};

export default Itens;
