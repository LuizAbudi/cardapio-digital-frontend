import axios from 'axios'
import { TItemsResponseType } from '../types/items'

axios.defaults.headers.common['ngrok-skip-browser-warning'] = true

const api = axios.create({
	baseURL: 'https://a40f-177-93-130-132.ngrok-free.app',
})

export const getItems = async () => {
	const { data } = await api.get<TItemsResponseType>('/itens')
	return data
}


export const API_URL = 'https://a40f-177-93-130-132.ngrok-free.app'