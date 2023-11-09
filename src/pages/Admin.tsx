import React, { useState, useEffect } from "react";
import * as logos from "../assets/images/index";
import Navigation from "../components/Navigation";

import axios from "axios";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  subPrice?: number;
  imageUrl: string;
  size?: string;
  subCategory?: string;
}

const Admin = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Realize a solicitação GET para buscar os itens do banco de dados
    axios
      .get("https://cardapio-digital-ktiu.onrender.com/itens/") // Substitua '/api/items' pela rota correta da sua API
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os itens:", error);
      });
  }, []);

  return (
    <div className="bg-wineColor min-h-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-row items-center justify-start space-x-4 md:space-x-8">
          <img
            src={logos.LogoBranca}
            alt="Logo"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
          <div className="text-2xl md:text-4xl text-white font-bold">
            TELA DE ADMINISTRAÇÃO
          </div>
        </div>
        <Navigation />
      </div>
      <div className="justify-center items-center p-2">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Sub-Categoria
                </th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
                  Preço
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 text-white border">{item.name}</td>
                  <td className="px-6 py-4 text-white border">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-white border">
                    {item.subCategory}
                  </td>
                  <td className="px-6 py-4 text-white border">{`R$${item.price.toFixed(
                    2
                  )}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
