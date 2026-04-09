export type TopCategoriesArgs = {
	first?: number
	after?: string
}

type Category = {
	id: string
	name: string
	box_art_url: string
	igdb_id: string
}

type Pagination = {
	cursor: string
}

export type TopCategoriesResponse = {
	data: Category[]
	pagination: Pagination
}
