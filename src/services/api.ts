import axios from 'axios'
import { TItemsResponseType } from '../types/items'

const api = axios.create({
	//baseURL: 'https://cardapio-digital-ktiu.onrender.com',
	baseURL: 'http://localhost:3001',
})

export const getItems = async () => {
	const { data } = await api.get<TItemsResponseType>('/itens')
	return data
}
