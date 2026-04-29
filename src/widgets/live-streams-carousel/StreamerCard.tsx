import type { StreamerInfoByLoginResponse } from '@/shared/api/twitch/types.ts'
import defaultBg from '@/shared/assets/images/defaultBackground.png'
import { formatYear } from '@/shared/lib/format/date.ts'
import { formatViewers } from '@/shared/lib/format/viewers.ts'
import { Button } from '@/shared/ui/button'

import styles from './styles.module.scss'

type StreamerCardProps = {
	streamerInfo?: StreamerInfoByLoginResponse
	currentUserViewers?: number
}

export const StreamerCard = ({ streamerInfo, currentUserViewers }: StreamerCardProps) => {
	const streamer = streamerInfo?.data[0]
	const background = streamer?.offline_image_url || defaultBg

	return (
		<div className={styles['streamer-card']}>
			<img
				src={background}
				className={styles['background-image']}
				alt='Streamer background'
			/>
			<div className={styles['main-info']}>
				<div className={styles['profile-image']}>
					<img
						src={streamer?.profile_image_url}
						alt='avatar'
					/>
				</div>
				<div className={styles['channel']}>
					<span>{streamer?.login}</span>
					{streamer && <span>С {formatYear(streamer.created_at)} года</span>}
					{currentUserViewers && <span>{formatViewers(currentUserViewers)} зрителей</span>}
				</div>
			</div>
			<Button
				href={`https://www.twitch.tv/${streamer?.login}`}
				target='_blank'
				className={styles['watch-btn']}
			>
				Смотреть на Twitch
			</Button>
		</div>
	)
}
