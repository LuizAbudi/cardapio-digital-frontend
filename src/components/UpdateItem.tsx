import React, { useState } from 'react';
import axios from 'axios';

interface ListItensProps {
  items: {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    subPrice?: number;
    imageUrl: string;
    size?: string;
    subCategory?: string;
  }[];
}

interface EditedItem {
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
    imageUrl: '',
    size: '',
    subCategory: '',
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
      imageUrl: '',
      size: '',
      subCategory: '',
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Adicione validação para campos numéricos
    if (name === 'price' || name === 'subPrice') {
      if (!/^\d+$/.test(value)) {
        // Se o valor não for um número, não atualize o estado
        return;
      }
    }

    setEditedItem((prevItem) => ({
      ...prevItem,
      [name as EditedItemKey]: value !== null ? value : '',
    }));
  };

  const handleSaveEdit = async (itemId: number) => {
    try {
      const updatedItem = {
        id: itemId,
        name: editedItem.name,
        category: editedItem.category,
        price: editedItem.price,
        description: editedItem.description,
        image: editedItem.imageUrl,
        subPrice: editedItem.subPrice,
        subCategory: editedItem.subCategory,
        size: editedItem.size,
      };

      const response = await axios.post(
        'https://cardapio-digital-ktiu.onrender.com/itens/update',
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
      imageUrl: '',
      size: '',
      subCategory: '',
    });
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md mt-4">
        {editingItemId !== null ? (
          <div>
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Editar Item</h2>
            <form>
              {Object.keys(editedItem).map((key) => (
                <div className="mb-4" key={key}>
                  <label htmlFor={key} className="block text-gray-600 text-sm font-medium mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={editedItem[key as EditedItemKey]}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 text-gray-800"
                  />
                </div>
              ))}

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
