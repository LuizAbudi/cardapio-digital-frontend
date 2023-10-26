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
      <h1>Itens</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h1>
              {`Nome: ${item.name}`}- {`Preço: ${item.price}`} -{" "}
              {`Categoria: ${item.category}`} -{" "}
              {`Descrição: ${item.description}`} - {`Imagem: ${item.image}`}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itens;
