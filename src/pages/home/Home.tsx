import { LiveStreamsCarousel } from '@/widgets/live-streams-carousel'
import { TopCategories } from '@/widgets/top-categories'

import { HeroBanner } from '@/shared/ui/hero-banner'

import styles from './Home.module.scss'

export const Home = () => {
	return (
		<div className={styles.wrapper}>
			<HeroBanner />
			<TopCategories />
			<LiveStreamsCarousel />
		</div>
	)
}
