export const getTwitchClipEmbedUrl = (embedUrl: string) => {
	const url = new URL(embedUrl)
	url.searchParams.set('parent', window.location.hostname)

	return url.toString()
}
