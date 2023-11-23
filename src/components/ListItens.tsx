import React, { useState } from "react";

interface ListItensProps {
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    subPrice?: number;
    image: string;
    size?: string;
    subCategory?: string;
    isPromotion?: boolean;
  }[];
}

const NoItemsFoundMessage: React.FC = () => (
  <p className="text-center text-black font-bold mb-4 bg-white w-full rounded-xl">
    Nenhum item encontrado!
  </p>
);

export const ListItens: React.FC<ListItensProps> = ({ items }) => {
  const verifyPromotion = (isPromotion: boolean | undefined) => {
    return isPromotion ? "Sim" : "Não";
  };

  const [searchItem, setSearchItem] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
  };

  const searchItemSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const filteredItems = items.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchItem.toLowerCase());
    const categoryMatch = item.category
      .toLowerCase()
      .includes(searchCategory.toLowerCase());

    // Combina ambas as condições
    return nameMatch && categoryMatch;
  });

  const displayItems = filteredItems.length > 0 ? filteredItems : items;

  return (
    <div className="overflow-x-auto p-4">
      <form className="flex flex-col mb-4 w-full" onSubmit={searchItemSubmited}>
        <div className="mb-4 w-1/3">
          <label
            htmlFor="name"
            className="block text-black font-bold text-xl mb-2"
          >
            Digite um item para pesquisar:
          </label>
          <input
            type="text"
            placeholder="Pesquisar"
            className="border-2 border-black rounded-lg p-2"
            onChange={handleSearch}
          />
          <select
            className="border-2 border-black rounded-lg p-2 ml-2"
            onChange={handleCategory}
          >
            <option value="">Todas as Categorias</option>
            <option value="Porções">Porções</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Drinks">Drinks</option>
            <option value="Doses">Doses</option>
          </select>
        </div>
      </form>
      <div className="min-w-full overflow-hidden overflow-x-auto">
        {filteredItems.length === 0 && <NoItemsFoundMessage />}
        <table className="min-w-full bg-white border-black rounded-xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-r border-black text-left">
                Nome
              </th>
              <th className="py-2 px-4 border-b border-r border-black text-left">
                Categoria
              </th>
              <th className="py-2 px-4 border-b border-r border-black text-left">
                Sub-Categoria
              </th>
              <th className="py-2 px-4 border-b border-r border-black text-left">
                Preço
              </th>
              <th className="py-2 px-4 border-b border-r border-black text-left ">
                Promoção
              </th>
            </tr>
          </thead>
          <tbody>
            {displayItems.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-500"}
              >
                <td className="py-2 px-4 border-b border-r border-black text-left">
                  {item.name}
                </td>
                <td className="py-2 px-4 border-b border-r border-black text-left">
                  {item.category}
                </td>
                <td className="py-2 px-4 border-b border-r border-black text-left">
                  {item.subCategory}
                </td>
                <td className="py-2 px-4 border-b border-r border-black text-left">
                  {`R$${item.price.toFixed(2)}`}
                </td>
                <td className="py-2 px-4 border-b border-r border-black text-left">
                  {verifyPromotion(item.isPromotion)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
