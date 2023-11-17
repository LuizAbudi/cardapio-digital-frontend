import React, { useState } from 'react';
import axios from 'axios';
import FormItens from './FormItens';

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

interface EditedItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  subPrice?: number;
  size?: string;
  subCategory?: string;
  isPromotion?: boolean;
}

type EditedItemKey = keyof EditedItem;

export const UpdateItem: React.FC<ListItensProps> = ({ items }) => {
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editedItem, setEditedItem] = useState<EditedItem>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    subPrice: 0,
    image: '',
    size: '',
    subCategory: '',
    isPromotion: false,
  });

  const handleEditClick = (itemId: number) => {
    const selectedItem = items.find((item) => item.id === itemId);

    if (selectedItem) {
      // Verifique se os valores não são null antes de definir o estado
      const updatedItem = {
        ...selectedItem,
        subPrice: selectedItem.subPrice || 0, // Por exemplo, defina um valor padrão
      };

      setEditedItem(updatedItem);
      setEditingItemId(itemId);
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItem({
      id: 0,
      name: '',
      description: '',
      price: 0,
      category: '',
      subPrice: 0,
      image: '',
      size: '',
      subCategory: '',
      isPromotion: false,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'price' || name === 'subPrice') {
      if (!/^\d+$/.test(value)) {
        return;
      }
    }

    setEditedItem((prevItem) => ({
      ...prevItem,
      [name as EditedItemKey]: value !== null ? value : '',
    }));

  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setEditedItem((prevItem) => ({
      ...prevItem,
      [name as EditedItemKey]: checked,
    }));
  }

  const handleSaveEdit = async (itemId: number) => {
    try {
      const updatedItem = {
        id: itemId,
        name: editedItem.name,
        category: editedItem.category,
        price: editedItem.price,
        description: editedItem.description,
        image: editedItem.image,
        subPrice: editedItem.subPrice,
        subCategory: editedItem.subCategory,
        size: editedItem.size,
        isPromotion: editedItem.isPromotion,
      };

      const response = await axios.post(
        'http://localhost:3001/itens/update',
        updatedItem
      );

      if (response.status === 200) {
        console.log('Item atualizado com sucesso!');
      } else {
        console.error('Falha ao atualizar o item:', response.statusText);
      }
    } catch (error) {
      console.error('Erro durante a atualização do item:', error);
    }

    setEditingItemId(null);
    setEditedItem({
      id: 0,
      name: '',
      description: '',
      price: 0,
      category: '',
      subPrice: 0,
      image: '',
      size: '',
      subCategory: '',
      isPromotion: false,
    });
  };

  const handleDelete = async (itemId: number) => {
    const id = itemId.toString();

    try {
      const response = await axios.delete('http://localhost:3001/itens', {
        data: { id: id },
      });

      console.log('Item deletado: ', response);

    } catch (error) {
      console.log('Erro:', error);
    }
  };
  

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    if (editingItemId !== null) {
      await handleSaveEdit(editingItemId);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md mt-4">
        {editingItemId !== null ? (
          <div>
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Editar Item</h2>
            <form>
              <FormItens 
                item={editedItem}
                handleChange={handleInputChange}
                handleCheckboxChange={handleCheckboxChange}
                isSizeDisabled={false}
                isSubCategoryDisabled={false}
                isPromotionDisabled={false}
                handleSubmit={handleFormSubmit}
              />

              <div className="flex">
                <button
                  className="bg-green-500 text-white rounded-lg p-2 mr-2"
                  onClick={() => handleSaveEdit(editingItemId)}
                >
                  Salvar
                </button>
                <button
                  className="bg-red-500 text-white rounded-lg p-2"
                  onClick={handleCancelEdit}
                >
                  Cancelar
                </button>
                <div className="flex-grow"></div>
                <button
                  className="bg-red-500 text-white rounded-lg p-2"
                  onClick={() => handleDelete(editingItemId)}
                >
                  Excluir Item
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-3 py-3 bg-gray-800 text-white text-left text-xs leading-4 font-medium">
                    Nome
                  </th>
                  <th className="px-3 py-3 bg-gray-800 text-white text-left text-xs leading-4 font-medium">
                    Categoria
                  </th>
                  <th className="px-3 py-3 bg-gray-800 text-white text-left text-xs leading-4 font-medium">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 border">{item.name}</td>
                    <td className="px-6 py-4 border">{item.category}</td>
                    <td className="px-6 py-4 border">
                      <button
                        className="bg-gray-800 text-white rounded-lg p-2"
                        onClick={() => handleEditClick(item.id)}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
