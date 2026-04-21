import { StreamerCard } from '@/widgets/live-streams-carousel/StreamerCard.tsx'
import { StreamPlayer } from '@/widgets/live-streams-carousel/StreamPlayer.tsx'
import type { StreamerInfoByLoginResponse } from '@/shared/api/twitch/types.ts'

type LiveStreamSlideProps = {
	currentUserLogin?: string
	streamerInfo?: StreamerInfoByLoginResponse
	currentUserViewers?: number
}

export const LiveStreamSlide = ({ currentUserLogin, streamerInfo, currentUserViewers }: LiveStreamSlideProps) => {
	return (
		<>
			<StreamPlayer currentUserLogin={currentUserLogin} />
			<StreamerCard
				streamerInfo={streamerInfo}
				currentUserViewers={currentUserViewers}
			/>
		</>
	)
}
