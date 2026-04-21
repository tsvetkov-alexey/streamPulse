import type { StreamerInfoByLoginResponse } from '@/shared/api/twitch/types.ts'

import styles from './styles.module.scss'
import { Button } from '@/shared/ui/button'
import { useMemo } from 'react'

type StreamerCardProps = {
	streamerInfo?: StreamerInfoByLoginResponse
	currentUserViewers?: number
}

export const StreamerCard = ({ streamerInfo, currentUserViewers }: StreamerCardProps) => {
	const streamer = streamerInfo?.data[0]

	// Считаем количество зрителей, чтобы выводилось итоговая запись по типу "32,5К зрителей"
	const viewers = useMemo(() => {
		if (!currentUserViewers) return
		return `${(currentUserViewers / 1000).toFixed(1)}К`
	}, [currentUserViewers])

	// Дата создания канала
	const yearCreatedAt = useMemo(() => {
		if (!streamer) return
		return new Date(streamer.created_at).getFullYear()
	}, [streamer])

	//https://www.twitch.tv/dinablin

	return (
		<div className={styles['streamer-card']}>
			<img
				src={streamer?.offline_image_url}
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
					<span>C {yearCreatedAt} года</span>
					<span>{viewers} зрителей</span>
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
