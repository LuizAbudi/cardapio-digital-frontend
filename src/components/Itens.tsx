import React, { useCallback, useEffect, useState } from 'react'
import CardItem from './CardItens'
import jsonData from '../data/data.json'
import { TItemsResponseType } from '../types/items'
import { getItems } from '../services/api'

const Itens = ({ type }: { type: string }) => {
	const [data, setData] = useState<TItemsResponseType>([])

	const getData = useCallback(async () => {
		try {
			const res = await getItems()

			console.log({ res })

			setData(res)
		} catch (error) {
			console.log({ error })
		}
	}, [])

	useEffect(() => {
		getData()
	}, [getData])

	// useEffect(() => {
	//   // Função para limpar o localStorage ao fechar a página
	//   const cleanupLocalStorage = () => {
	//     localStorage.removeItem("menuData");
	//   };

	//   // Adiciona o evento de antes de descarregar a página para limpar o localStorage
	//   window.addEventListener("beforeunload", cleanupLocalStorage);

	//   // Verifica se há dados no localStorage ao carregar a página
	//   const localData = localStorage.getItem("menuData");
	//   if (localData) {
	//     setData(JSON.parse(localData));
	//   } else {
	//     // Se não houver dados no localStorage, insira os dados do jsonData
	//     const jsonDataString = JSON.stringify(jsonData);
	//     localStorage.setItem("menuData", jsonDataString);
	//     setData(jsonData);
	//   }

	//   // Remove o evento antes de descarregar a página quando o componente é desmontado
	//   return () => {
	//     window.removeEventListener("beforeunload", cleanupLocalStorage);
	//   };
	// }, []);

	const Porcoes = () => {
		if (type === 'Porções') {
			return (
				<div className='flex flex-wrap -m-4 justify-center md:-m-2'>
					{data
						.filter((item) => item.category === 'Porções')
						.map((item) => (
							<CardItem
								key={item.id}
								name={item.name}
								description={item.description}
								price={item.price}
								subPrice={item.subPrice}
								imageUrl={item.image}
							/>
						))}
				</div>
			)
		}
		return null
	}

	const Bebidas = () => {
		if (type === 'Bebidas') {
			const bebidasData = data.filter((item) => item.category === 'Bebidas')
			console.log('Itens de Bebidas recebidos', bebidasData)

			const orderOfSubcategories = [
				'Cervejas',
				'Refrigerantes',
				'Aguas',
				'Sucos',
				'Energeticos',
				'Vinhos',
			]

			type ItemsBySubCategory = { [subCategory: string]: TItemsResponseType }
			const itemsBySubCategory: ItemsBySubCategory = {}

			bebidasData.forEach((item) => {
				const subCategory = item.subCategory || 'Sem Subcategoria'
				if (!itemsBySubCategory[subCategory]) {
					itemsBySubCategory[subCategory] = []
				}
				itemsBySubCategory[subCategory].push(item)
			})

			return (
				<div>
					{orderOfSubcategories.map((subCategory) => {
						if (itemsBySubCategory[subCategory]) {
							return (
								<div key={subCategory}>
									<h2 className='text-center text-2xl md:text-2xl text-white py-8'>
										{subCategory}
									</h2>
									<div className='flex flex-wrap -m-4 justify-center md:-m-2'>
										{itemsBySubCategory[subCategory].map((item) => (
											<CardItem
												key={item.id}
												name={item.name}
												description={item.description}
												price={item.price}
												size={item.size}
												subCategory={item.subCategory}
												imageUrl={item.image}
											/>
										))}
									</div>
								</div>
							)
						}
						return null
					})}
				</div>
			)
		}
		return null
	}

	const Drinks = () => {
		if (type === 'Drinks') {
			return (
				<div className='flex flex-wrap -m-4 justify-center md:-m-2'>
					{data
						.filter((item) => item.category === 'Drinks')
						.map((item) => (
							<CardItem
								key={item.id}
								name={item.name}
								description={item.description}
								price={item.price}
								imageUrl={item.image}
							/>
						))}
				</div>
			)
		}
		return null
	}

	const Doses = () => {
		if (type === 'Doses') {
			return (
				<div className='flex flex-wrap -m-4 justify-center md:-m-2'>
					{data
						.filter((item) => item.category === 'Doses')
						.map((item) => (
							<CardItem
								key={item.id}
								name={item.name}
								description={item.description}
								price={item.price}
								imageUrl={item.image}
							/>
						))}
				</div>
			)
		}
		return null
	}

	const returnComponent = () => {
		if (type === 'Porções') {
			return <Porcoes />
		}
		if (type === 'Bebidas') {
			return <Bebidas />
		}
		if (type === 'Drinks') {
			return <Drinks />
		}
		if (type === 'Doses') {
			return <Doses />
		}
		return null
	}

	return (
		<div>
			<ul>{returnComponent()}</ul>
		</div>
	)
}

export default Itens
