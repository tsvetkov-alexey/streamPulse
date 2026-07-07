import { baseApi } from '@/shared/api/base/baseApi.ts'
import type {
	ClipArgs,
	ClipResponse,
	CursorArgs,
	LiveStreamerResponse,
	StreamArgs,
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
		getLiveStreams: build.query<LiveStreamerResponse, StreamArgs | void>({
			query: args => ({
				url: '/streams',
				params: {
					first: args?.first,
					after: args?.after,
					game_id: args?.gameId
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
	useGetLiveStreamsQuery,
	useGetStreamerInfoByLoginQuery,
	useGetClipInfoByGameIdQuery
} = twitchApi
