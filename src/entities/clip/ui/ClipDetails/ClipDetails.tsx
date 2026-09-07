import type { ClipResponse } from '@/shared/api/twitch/types.ts'
import Calendar from '@/shared/assets/svg/calendar.svg'
import Eye from '@/shared/assets/svg/eye.svg'
import Gamepad from '@/shared/assets/svg/gamepad.svg'
import Globe from '@/shared/assets/svg/globe.svg'

import styles from './ClipDetails.module.scss'

interface ClipInfoProps {
	clipInfo?: ClipResponse
}

// Блок с подробной информацией по клипу (правая часть)
export const ClipDetails = ({ clipInfo }: ClipInfoProps) => {
	return (
		<div className={styles['info-block']}>
			<h3>Funny moment</h3>
			<div className={styles['authors']}>
				<div className={styles['streamer']}>
					<div className={styles['avatar']}>
						<img
							alt='avatar'
							src='https://static-cdn.jtvnw.net/jtv_user_pictures/ef28ba12-c8ed-46d4-838b-a4c95ef5b469-profile_image-300x300.png'
						/>
						<div className={styles['channel-name']}>
							<span>Канал</span>
							<span>Buster</span>
						</div>
					</div>
					<button className={styles['right-arrow']}>{'>'}</button>
				</div>
				<div className={styles['clip-creator']}>
					<div className={styles['avatar']}>
						<img
							alt='avatar'
							src='https://static-cdn.jtvnw.net/jtv_user_pictures/ef28ba12-c8ed-46d4-838b-a4c95ef5b469-profile_image-300x300.png'
						/>
						<div className={styles['channel-name']}>
							<span>Автор клипа</span>
							<span>User19129</span>
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
					<span>5,8 млн. просмотров</span>
				</div>
				<div className={styles['statistics__info']}>
					<img
						src={Calendar}
						alt='calendar'
						width={20}
					/>
					<span>10 дек. 2020 года</span>
				</div>
				<div className={styles['statistics__info']}>
					<img
						src={Globe}
						alt='language'
						width={20}
					/>
					<span>RU</span>
				</div>
				<div className={styles['statistics__info']}>
					<img
						src={Gamepad}
						alt='gamepad'
						width={20}
					/>
					<span>Just chatting</span>
				</div>
			</div>
		</div>
	)
}
