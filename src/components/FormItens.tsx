import React from 'react'

interface FormItensProps {
  item: {
    name: string;
    description: string;
    price: number;
    category: string;
    subPrice?: number;
    image: string;
    size?: string;
    subCategory?: string;
    isPromotion?: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSizeDisabled: boolean;
  isSubCategoryDisabled: boolean;
  isPromotionDisabled: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const FormItens: React.FC<FormItensProps> = ({
  item,
  handleChange,
  handleCheckboxChange,
  isSizeDisabled,
  isSubCategoryDisabled,
  isPromotionDisabled,
  handleSubmit,
}) => {
  return (
    <div>
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
            <label htmlFor='image' className='block text-gray-600 text-sm font-medium mb-2'>
              Url da Imagem:
            </label>
            <input
              required
              type='text'
              id='image'
              name='image'
              value={item.image}
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
              disabled={isSizeDisabled}
              className={`w-full border-gray-300 rounded-md shadow-sm p-2 ${isSizeDisabled ? 'bg-gray-500 text-gray-400' : 'bg-gray-200 text-gray-800'}`}
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
              disabled={isSubCategoryDisabled}
              className={`w-full border-gray-300 rounded-md shadow-sm p-2 ${isSubCategoryDisabled ? 'bg-gray-500 text-gray-400' : 'bg-gray-200 text-gray-800'}`}
            />
          </div>

          <div className='flex items-center mb-4'>
            <label htmlFor='isPromotion' className='text-gray-600 text-sm font-medium mr-2'>
              Este item está na promoção?
            </label>
            <input
              type='checkbox'
              id='isPromotion'
              name='isPromotion'
              checked={item.isPromotion}
              onChange={handleCheckboxChange}              
              className={`border-gray-300 rounded-md shadow-sm p-2 
                          ${isPromotionDisabled ? 'bg-gray-500 text-gray-400' : 'bg-gray-200 text-gray-800'}
                          w-5 h-5`} 
            />
          </div>
        </form>
    </div>
  )
}

export default FormItens