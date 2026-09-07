import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { env } from '@/shared/config/env.ts'

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: env.backendApi,

		prepareHeaders: headers => {
			headers.set('Client-ID', env.twitchClientId)

			const token = sessionStorage.getItem('twitch_access_token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}

			return headers
		}
	}),

	endpoints: () => ({})
})
