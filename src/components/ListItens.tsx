import React from 'react'

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
    }[]
    } 

export const ListItens:React.FC<ListItensProps>= ( {items} ) => {
  return (
    <div className="overflow-x-auto p-4">
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
  )
}
