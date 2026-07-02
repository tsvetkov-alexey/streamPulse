import { baseApi } from '@/shared/api/base/baseApi.ts'
import type {
	ClipArgs,
	ClipResponse,
	CursorArgs,
	LiveStreamerResponse,
	StreamerInfoByLoginArgs,
	StreamerInfoByLoginResponse,
	TopCategoriesResponse
} from '@/shared/api/twitch/types.ts'

export const twitchApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getTopCategories: build.query<TopCategoriesResponse, CursorArgs | void>({
			query: args => ({
				url: '/games/top',
				params: {
					first: args?.first,
					after: args?.after
				}
			})
		}),
		getLiveStreamer: build.query<LiveStreamerResponse, CursorArgs | void>({
			query: args => ({
				url: '/streams',
				params: {
					first: args?.first,
					after: args?.after
				}
			})
		}),
		getStreamerInfoByLogin: build.query<StreamerInfoByLoginResponse, StreamerInfoByLoginArgs>({
			query: ({ login }) => ({
				url: '/users',
				params: { login }
			})
		}),
		getClipInfoByGameId: build.query<ClipResponse, ClipArgs>({
			query: ({ gameId, first }) => ({
				url: '/clips',
				params: { gameId, first }
			})
		})
	})
})

export const {
	useGetTopCategoriesQuery,
	useGetLiveStreamerQuery,
	useGetStreamerInfoByLoginQuery,
	useGetClipInfoByGameIdQuery
} = twitchApi
