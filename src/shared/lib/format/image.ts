// Форматирование картинок, которые приходят от twitch Api
export const formatImage = (imageUrl: string | undefined, width: number, height: number) => {
	return imageUrl?.replace('{width}', String(width)).replace('{height}', String(height))
}
