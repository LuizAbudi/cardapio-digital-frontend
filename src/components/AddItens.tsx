import React, { useState, ChangeEvent } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number | '';
  category: string;
  subPrice: number | '';
  imageUrl: string;
  size: string;
  subCategory: string;
}

const AddItens = () => {
  const [item, setItem] = useState<Item>({
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'price' || name === 'subPrice') {
      const updatedValue = value === '' ? '' : Math.max(0, parseFloat(value));

      setItem((prevItem) => ({
        ...prevItem,
        [name]: updatedValue,
      }));
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Item enviado:', item);
  };

  return (
    <div className='bg-wineColor flex justify-center p-10'>
      <div className='min-w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 justify-center items-center flex'>
          Adicionar Item
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-600 text-sm font-medium mb-2'>
              Nome:
            </label>
            <input
            required
              type='text'
              id='name'
              name='name'
              value={item.name}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='description' className='block text-gray-600 text-sm font-medium mb-2'>
              Descrição:
            </label>
            <input
            required
              type='text'
              id='description'
              name='description'
              value={item.description}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='price' className='block text-gray-600 text-sm font-medium mb-2'>
              Preço:
            </label>
            <input
            required
              type='number'
              id='price'
              name='price'
              value={item.price}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='category' className='block text-gray-600 text-sm font-medium mb-2'>
                Categoria:
            </label>
            <select
                required
                id='category'
                name='category'
                value={item.category}
                onChange={handleChange}
                className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            >
              <option value=''>Selecione a Categoria</option>
              <option value='Porções'>Porções</option>
              <option value='Bebidas'>Bebidas</option>
              <option value='Drinks'>Drinks</option>
              <option value='Doses'>Doses</option>
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='imageUrl' className='block text-gray-600 text-sm font-medium mb-2'>
              Url da Imagem:
            </label>
            <input
              required
              type='text'
              id='imageUrl'
              name='imageUrl'
              value={item.imageUrl}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='subPrice' className='block text-gray-600 text-sm font-medium mb-2'>
              Preço de Meia (Porção):
            </label>
            <input
              type='number'
              id='subPrice'
              name='subPrice'
              value={item.subPrice}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='size' className='block text-gray-600 text-sm font-medium mb-2'>
              Quantidade de ml (Bebidas):
            </label>
            <input
              type='text'
              id='size'
              name='size'
              value={item.size}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='subCategory' className='block text-gray-600 text-sm font-medium mb-2'>
              Qual tipo de bebida? (Bebidas Ex: Refrigerante, Cervejas etc):
            </label>
            <input
              type='text'
              id='subCategory'
              name='subCategory'
              value={item.subCategory}
              onChange={handleChange}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-wineColor text-white py-2 rounded-md'
          >
            Adicionar Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItens;
