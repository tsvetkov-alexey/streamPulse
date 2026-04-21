type StreamPlayerProps = {
	currentUserLogin?: string
}

export const StreamPlayer = ({ currentUserLogin }: StreamPlayerProps) => {
	const parent = window.location.hostname
	if (!currentUserLogin) return

	return (
		<iframe
			src={`https://player.twitch.tv/?channel=${currentUserLogin}&parent=${parent}&muted=true`}
			width='46%'
			height='380px'
			allowFullScreen
		/>
	)
}
