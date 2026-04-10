import { cn } from '@/shared/lib/cn.ts'
import { formatImage } from '@/shared/lib/formatters.ts'

import styles from './styles.module.scss'

interface CategoryCardProps {
	categoryName: string
	imageUrl: string
}

export const CategoryCard = ({ categoryName, imageUrl }: CategoryCardProps) => {
	const imageSrc = formatImage(imageUrl, 220, 320)

	return (
		<div className={cn(styles['category-block'])}>
			<img
				src={imageSrc}
				alt='category'
				width={220}
				height={320}
			/>
			<span>{categoryName}</span>
			<span>138k зрителей</span>
		</div>
	)
}
