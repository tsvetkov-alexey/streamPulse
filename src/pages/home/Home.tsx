import { HeroBanner } from '@/shared/ui/hero-banner'
import { TopCategories } from '@/widgets/top-categories'

import cls from './Home.module.scss'

export const Home = () => {
	return (
		<div className={cls.wrapper}>
			<HeroBanner />
			<TopCategories />
		</div>
	)
}
