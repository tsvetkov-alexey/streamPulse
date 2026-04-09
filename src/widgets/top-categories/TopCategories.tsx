import Fire from '@/shared/assets/images/fire.png'
import { CategoryCard } from '@/widgets/top-categories'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/cn.ts'
import { useGetTopCategoriesQuery } from '@/shared/api/twitch/twitchApi.ts'
import { useState } from 'react'
import styles from './styles.module.scss'

export const TopCategories = () => {
	// Стейт для cursor-пагинации
	const [cursor, setCursor] = useState<string | null>(null)

	const { data: categories } = useGetTopCategoriesQuery(
		cursor
			? {
					first: 5,
					after: cursor
				}
			: { first: 5 }
	)

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
				{categories?.data?.map(el => {
					return (
						<CategoryCard
							key={el?.id}
							categoryName={el?.name}
							imageUrl={el?.box_art_url}
						/>
					)
				})}
			</div>
			<Button
				className={cn(styles['more-button'])}
				onClick={() => {
					if (categories) {
						setCursor(categories?.pagination?.cursor)
					}
				}}
			>
				Еще
			</Button>
		</div>
	)
}
