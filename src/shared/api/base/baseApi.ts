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
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			headers.set('Client-ID', import.meta.env.VITE_TWITCH_CLIENT_ID)

			// Временный токен (заменить потом на реальный)
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const token = import.meta.env.VITE_TWITCH_ACCESS_TOKEN
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}

			return headers
		}
	}),

	endpoints: () => ({})
})
