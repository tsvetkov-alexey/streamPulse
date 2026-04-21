import type { Category } from '@/entities/category/model/types.ts'
import type { Streamer } from '@/entities/stream/model/types.ts'

export type CursorArgs = {
	first?: number
	after?: string
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
	login: string
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
