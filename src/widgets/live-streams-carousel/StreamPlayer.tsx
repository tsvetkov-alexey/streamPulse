import { useMemo } from 'react'

type StreamPlayerProps = {
	currentUserLogin?: string
}

export const StreamPlayer = ({ currentUserLogin }: StreamPlayerProps) => {
	const src = useMemo(() => {
		if (!currentUserLogin) return null

		const url = new URL('https://player.twitch.tv/')

		url.searchParams.set('channel', currentUserLogin)
		url.searchParams.set('parent', window.location.hostname)
		url.searchParams.set('muted', 'true')
		url.searchParams.set('autoplay', 'false')

		return url.toString()
	}, [currentUserLogin])

	if (!src) return null

	return (
		<iframe
			// src={src}
			width='100%'
			height='420'
			allowFullScreen
			title={`${currentUserLogin} Twitch stream`}
		/>
	)
}
