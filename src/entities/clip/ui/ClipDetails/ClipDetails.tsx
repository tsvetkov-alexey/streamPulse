import { skipToken } from '@reduxjs/toolkit/query'

import { useGetStreamerInfoByLoginQuery } from '@/shared/api/twitch/twitchApi.ts'
import type { ClipByGameId } from '@/shared/api/twitch/types.ts'
import defaultBg from '@/shared/assets/images/defaultBackground.png'
import Calendar from '@/shared/assets/svg/calendar.svg'
import Eye from '@/shared/assets/svg/eye.svg'
import Gamepad from '@/shared/assets/svg/gamepad.svg'
import Globe from '@/shared/assets/svg/globe.svg'
import { formatDate } from '@/shared/lib/format/date.ts'
import { formatViewers } from '@/shared/lib/format/viewers.ts'

import styles from './ClipDetails.module.scss'

interface ClipInfoProps {
	clipInfo?: ClipByGameId
}

// Блок с подробной информацией по клипу (правая часть)
export const ClipDetails = ({ clipInfo }: ClipInfoProps) => {
	const {
		data: streamerPhoto,
		isFetching: isPhotoFetching,
		isError: isPhotoError
	} = useGetStreamerInfoByLoginQuery(clipInfo?.broadcaster_id ? { id: clipInfo.broadcaster_id } : skipToken)

	const {
		data: clipMakerPhoto,
		isFetching: isClipMakerPhotoFetching,
		isError: isClipMakerPhotoError
	} = useGetStreamerInfoByLoginQuery(clipInfo?.creator_id ? { id: clipInfo.creator_id } : skipToken)

	const streamerAvatar = streamerPhoto?.data[0]?.profile_image_url || defaultBg
	const clipMakerAvatar = clipMakerPhoto?.data[0]?.profile_image_url || defaultBg

	return (
		<div className={styles['info-block']}>
			<h3>{clipInfo?.title}</h3>
			<div className={styles['authors']}>
				<div className={styles['streamer']}>
					<div className={styles['avatar']}>
						<img
							alt='avatar'
							src={streamerAvatar}
						/>
						<div className={styles['channel-name']}>
							<span className={styles.secondary}>Канал</span>
							<span>{clipInfo?.broadcaster_name}</span>
						</div>
					</div>
					<button className={styles['right-arrow']}>{'>'}</button>
				</div>
				<div className={styles['clip-creator']}>
					<div className={styles['avatar']}>
						<img
							alt='avatar'
							src={clipMakerAvatar}
						/>
						<div className={styles['channel-name']}>
							<span className={styles.secondary}>Автор клипа</span>
							<span>{clipInfo?.creator_name}</span>
						</div>
					</div>
					<button className={styles['right-arrow']}>{'>'}</button>
				</div>
			</div>
			<div className={styles['statistics']}>
				<div className={styles['statistics__info']}>
					<img
						src={Eye}
						alt='view'
						width={20}
					/>
					<span>{formatViewers(clipInfo?.view_count ?? 0)} просмотров</span>
				</div>
				<div className={styles['statistics__info']}>
					<img
						src={Calendar}
						alt='calendar'
						width={20}
					/>
					<span>{formatDate(clipInfo?.created_at ?? '')}</span>
				</div>
				<div className={styles['statistics__info']}>
					<img
						src={Globe}
						alt='language'
						width={20}
					/>
					<span>{clipInfo?.language ?? 'Language is not defined'}</span>
				</div>
				<div className={styles['statistics__info']}>
					<img
						src={Gamepad}
						alt='gamepad'
						width={20}
					/>
					{/*Все клипы только для категории Just chatting, API этого не возвращает, поэтому мы это хардкодим*/}
					<span>Just chatting</span>
				</div>
			</div>
		</div>
	)
}
