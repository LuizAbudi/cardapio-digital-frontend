import axios from 'axios'
import { TItemsResponseType } from '../types/items'

const api = axios.create({
	baseURL: 'http://177.93.130.132:3001',
})

export const getItems = async () => {
	const { data } = await api.get<TItemsResponseType>('/itens')
	return data
}
