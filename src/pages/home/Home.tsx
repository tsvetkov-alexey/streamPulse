import { TopClips } from '@/widgets/clips-carousel'
import { LiveStreamsCarousel } from '@/widgets/live-streams-carousel'
import { TopCategories } from '@/widgets/top-categories'

import Live from '@/shared/assets/images/live.png'
import Clip from '@/shared/assets/svg/clip.svg'
import { HeroBanner } from '@/shared/ui/hero-banner'

import styles from './Home.module.scss'

export const Home = () => {
	return (
		<div className={styles.wrapper}>
			<HeroBanner />
			<TopCategories />
			<section className={styles.section}>
				<div className={styles.title}>
					<h2>Популярно онлайн</h2>
					<img
						src={Live}
						alt='live'
						width='80px'
					/>
				</div>
				<LiveStreamsCarousel />
			</section>
			<section className={styles.section}>
				<div className={styles.title}>
					<h2>Топовые клипы</h2>
					<img
						src={Clip}
						alt='clip'
						width='36px'
						className={styles['clip-icon']}
					/>
				</div>
				<TopClips />
			</section>
		</div>
	)
}
