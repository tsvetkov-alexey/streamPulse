import Viewers from '@/shared/assets/svg/viewers.svg'
import { formatImage } from '@/shared/lib/format/image.ts'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
	categoryName: string
	imageUrl: string
}

export const CategoryCard = ({ categoryName, imageUrl }: CategoryCardProps) => {
	const imageSrc = formatImage(imageUrl, 220, 320)

	return (
		<div className={styles['category-block']}>
			<img
				src={imageSrc}
				className={styles['category-block__image']}
				alt='category'
				width={280}
				height={340}
			/>
			<div className={styles.title}>
				<h3>{categoryName}</h3>
				<div className={styles.viewers}>
					<img
						src={Viewers}
						alt='viewers'
					/>
					<span>138k зрителей</span>
				</div>
			</div>
		</div>
	)
}
