import Category from '@/shared/assets/images/category.jpg'
import styles from './styles.module.scss'
import { cn } from '@/shared/lib/cn.ts'

export const CategoryCard = () => {
	return (
		<div className={cn(styles['category-block'])}>
			<img
				src={Category}
				alt='category'
				width={220}
				height={320}
			/>
			<span>Just chatting</span>
			<span>138k зрителей</span>
		</div>
	)
}
