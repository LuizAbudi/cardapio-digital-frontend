import axios from 'axios'
import { TItemsResponseType } from '../types/items'

const api = axios.create({
	baseURL: 'https://a40f-177-93-130-132.ngrok-free.app',
})

export const getItems = async () => {
	const { data } = await api.get<TItemsResponseType>('/itens')
	return data
}
