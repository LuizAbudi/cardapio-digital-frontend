import React, { useEffect, useState } from "react";
import axios from "axios";

const Itens = () => {
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

  return (
    <div>
      <h1>Itens Porções</h1>
      <ul>
        {data
          .filter((item) => item.category === "Porções")
          .map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          ))}
      </ul>
      <h1>Itens Bebidas</h1>
      <ul>
        {data
          .filter((item) => item.category === "Bebidas")
          .map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          ))}
      </ul>
      <h1>Itens Drinks</h1>
      <ul>
        {data
          .filter((item) => item.category === "Drinks")
          .map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Itens;
