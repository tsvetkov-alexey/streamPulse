import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_APP_BACKEND_API as string

if (!BASE_URL) {
	console.warn('VITE_APP_BACKEND_API не определен в .env')
}

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,

		// Временные заголовки для Twitch
		prepareHeaders: headers => {
			const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID as string
			headers.set('Client-ID', clientId)

			const token = sessionStorage.getItem('twitch_access_token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}

			return headers
		}
	}),

	endpoints: () => ({})
})
