import React, { useCallback, useEffect, useState } from 'react'
import CardItem from './CardItens'
//import jsonData from '../data/data.json'
import { TItemsResponseType } from '../types/items'
import { getItems } from '../services/api'

const ItensPromotion = ({ type }: { type: string }) => {
	const [data, setData] = useState<TItemsResponseType>([])

	const getData = useCallback(async () => {
		try {
			const res = await getItems()
			setData(res)
		} catch (error) {
			console.log({ error })
		}
	}, [])

	useEffect(() => {
		getData()
	}, [getData])
    


	const Promotions = () => {
		if (type === 'Promotions') {
			return (
				<div className='flex flex-wrap -m-4 justify-center md:-m-2'>
					{data
						.filter((item) => item.isPromotion)
						.map((item) => (
							<CardItem
								key={item.id}
								name={item.name}
								description={item.description}
								price={item.price}
								imageUrl={item.image}
                                pricePromotion={item.pricePromotion}
							/>
						))}
                    
				</div>
			)
		}
		return null
	}

	const returnComponent = () => {
		if (type === 'Promotions') {
			return <Promotions />
		}
		return null
	}

	return (
		<div>
			<ul>{returnComponent()}</ul>
		</div>
	)
}

export default ItensPromotion
