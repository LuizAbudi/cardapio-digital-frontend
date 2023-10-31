import React, { useEffect, useState } from "react";
import CardItem from "./CardItens";
import jsonData from "../data/data.json";

const Itens = ({ type }: { type: string }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Função para limpar o localStorage ao fechar a página
    const cleanupLocalStorage = () => {
      localStorage.removeItem("menuData");
    };

    // Adiciona o evento de antes de descarregar a página para limpar o localStorage
    window.addEventListener("beforeunload", cleanupLocalStorage);

    // Verifica se há dados no localStorage ao carregar a página
    const localData = localStorage.getItem("menuData");
    if (localData) {
      setData(JSON.parse(localData));
    } else {
      // Se não houver dados no localStorage, insira os dados do jsonData
      const jsonDataString = JSON.stringify(jsonData);
      localStorage.setItem("menuData", jsonDataString);
      setData(jsonData);
    }

    // Remove o evento antes de descarregar a página quando o componente é desmontado
    return () => {
      window.removeEventListener("beforeunload", cleanupLocalStorage);
    };
  }, []);

  const Porcoes = () => {
    if (type === "Porções") {
      return (
        <div className="flex flex-wrap -m-4 justify-center md:-m-2">
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
        <div className="flex flex-wrap -m-4 justify-center md:-m-2">
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
        <div className="flex flex-wrap -m-4 justify-center md:-m-2">
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
