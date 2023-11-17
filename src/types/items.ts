export type TItemResponseType = {
	id: number
	name: string
	description: string
	price: number
	subPrice?: number
	image: string
	category: string
	size?: string
	subCategory?: string
	isPromotion: boolean
	pricePromotion?: number
}

export type TItemsResponseType = TItemResponseType[]
