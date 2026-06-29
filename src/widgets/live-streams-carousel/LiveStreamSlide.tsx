import { StreamPlayer } from '@/widgets/live-streams-carousel/StreamPlayer.tsx'

import { StreamerCard } from '@/entities/stream/ui/StreamerCard'

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
