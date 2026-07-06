type StreamPlayerProps = {
	currentUserLogin?: string
}

export const StreamPlayer = ({ currentUserLogin }: StreamPlayerProps) => {
	const parent = window.location.hostname
	if (!currentUserLogin) return

	return (
		<iframe
			// src={`https://player.twitch.tv/?channel=${currentUserLogin}&parent=${parent}&muted=true`}
			height='420px'
			allowFullScreen
		/>
	)
}
