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
}

export type TItemsResponseType = TItemResponseType[]
