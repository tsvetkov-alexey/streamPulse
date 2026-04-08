import Fire from '@/shared/assets/images/fire.png'
import { CategoryCard } from '@/widgets/top-categories'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/cn.ts'
import styles from './styles.module.scss'

export const TopCategories = () => {
	return (
		<div className={styles.categories}>
			<div className={cn(styles['category-title'])}>
				<h3>Категории в топе</h3>
				<img
					src={Fire}
					alt='fire'
					width='24px'
				/>
			</div>
			<div className={cn(styles['category-cards'])}>
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
				<CategoryCard />
			</div>
			<Button className={cn(styles['more-button'])}>Еще</Button>
		</div>
	)
}
