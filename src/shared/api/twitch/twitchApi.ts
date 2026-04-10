import { baseApi } from '@/shared/api/base/baseApi.ts'
import type { TopCategoriesArgs, TopCategoriesResponse } from '@/shared/api/twitch/types.ts'

export const twitchApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getTopCategories: build.query<TopCategoriesResponse, TopCategoriesArgs | void>({
			query: args => ({
				url: 'games/top',
				params: {
					first: args?.first,
					after: args?.after
				}
			})
		})
	})
})

export const { useGetTopCategoriesQuery } = twitchApi
