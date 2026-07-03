import { Button } from '@/shared/ui/button'

import styles from './HeroBanner.module.scss'

export const HeroBanner = () => {
	return (
		<div className={styles.hero}>
			<h2 className={styles['main-text']}>Откройте для себя мир стримов</h2>
			<span className={styles['secondary-text']}>Исследуйте live-контент</span>
			<Button onClick={() => window.open('https://twitch.tv/', '_blank')}>Исследовать</Button>
		</div>
	)
}
