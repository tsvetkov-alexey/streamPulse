import type { Category } from '@/entities/category/model/types.ts'
import type { Streamer } from '@/entities/stream/model/types.ts'

export type CursorArgs = {
	first?: number
	after?: string
}

export type StreamArgs = {
	first?: number
	after?: string
	gameId?: string
}

type Pagination = {
	cursor: string
}

export type TopCategoriesResponse = {
	data: Category[]
	pagination: Pagination
}

export type LiveStreamerResponse = {
	data: Streamer[]
	pagination: Pagination
}

export type StreamerInfoByLoginArgs = {
	login?: string
}

type StreamerByLogin = {
	id: string
	login: string
	display_name: string
	type: string
	broadcaster_type: string
	description: string
	profile_image_url: string
	offline_image_url: string
	view_count: number
	created_at: string
}

export type StreamerInfoByLoginResponse = {
	data: StreamerByLogin[]
}

export type ClipArgs = {
	gameId: number
	first: number
}

export type clipByGameId = {
	id: string
	url: string
	embed_url: string
	broadcaster_id: string
	broadcaster_name: string
	creator_id: string
	creator_name: string
	video_id: string
	game_id: string
	language: string
	title: string
	view_count: number
	created_at: string
	thumbnail_url: string
	duration: number
	vod_offset: string | null
	is_featured: boolean
}

export type ClipResponse = {
	data: clipByGameId[]
}
