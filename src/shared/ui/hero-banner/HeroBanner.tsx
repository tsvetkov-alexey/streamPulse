import { cn } from '@/shared/lib/cn.ts'

import styles from './HeroBanner.module.scss'

export const HeroBanner = () => {
	return (
		<div className={styles.hero}>
			<h2 className={cn(styles['main-text'])}>Откройте для себя мир стримов</h2>
			<span className={cn(styles['secondary-text'])}>Исследуйте live-контент</span>
		</div>
	)
}
