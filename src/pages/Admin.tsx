import React, { useState, useEffect } from "react";
import * as logos from "../assets/images/index";
import Navigation from "../components/Navigation";

import axios from "axios";
import { ListItens } from "../components/ListItens";
import AddItens from "../components/AddItens";
import { UpdateItem } from "../components/UpdateItem";

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
    axios
      .get("https://cardapio-digital-ktiu.onrender.com/itens/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os itens:", error);
      });
  }, []);

  const [listContent, setListContent] = useState(false);
  const [addContent, setAddContent] = useState(false);
  const [updateContent, setUpdateContent] = useState(false);

  const handleClickList = () => {
    setListContent(!listContent);
    setAddContent(false);
  };
  const handleClickAdd = () => {
    setAddContent(!addContent);
    setListContent(false);
  };
  const handleClickUpdate = () => {
    setUpdateContent(!updateContent);
    setAddContent(false);
    setListContent(false);
  };

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
      <div className="justify-center items-center">
        <div>
          <div className="text-2xl text-white font-bold ml-4">
            <button className="bg-white text-wineColor rounded-lg p-2 mb-2 md:mb-0 md:mr-2" onClick={handleClickList}>
              Listar Itens
            </button>
            <button className="bg-white text-wineColor rounded-lg p-2 mb-2 md:mb-0 md:mr-2" onClick={handleClickAdd}>
              Adicionar Item
            </button>
            <button className="bg-white text-wineColor rounded-lg p-2" onClick={handleClickUpdate}>
              Atualizar/Editar Item
            </button>
          </div>
        </div>
        {listContent && <ListItens items={items} />}
        {addContent && <AddItens />}
        {updateContent && <UpdateItem items={items} />}
      </div>
    </div>
  );
};

export default Admin;
