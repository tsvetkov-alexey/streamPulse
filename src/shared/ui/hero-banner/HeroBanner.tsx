import rightArrow from '@/shared/assets/svg/rightArrow.svg'
import { Button } from '@/shared/ui/button'

import styles from './HeroBanner.module.scss'

export const HeroBanner = () => {
	return (
		<div className={styles.hero}>
			<h2 className={styles['main-text']}>Откройте для себя мир стримов</h2>
			<span className={styles['secondary-text']}>Исследуйте live-контент</span>
			<Button
				icon={
					<img
						src={rightArrow}
						alt='arrow'
						height={22}
					/>
				}
				iconPosition='right'
				onClick={() => window.open('https://twitch.tv/', '_blank')}
			>
				Смотреть сейчас
			</Button>
		</div>
	)
}
