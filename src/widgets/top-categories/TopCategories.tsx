import { useEffect, useState } from 'react'

import type { Category } from '@/entities/category/model/types.ts'
import { CategoryCard } from '@/entities/category/ui/CategoryCard'

import { useGetTopCategoriesQuery } from '@/shared/api/twitch/twitchApi.ts'
import Fire from '@/shared/assets/images/fire.png'
import { Button } from '@/shared/ui/button'
import { CategorySkeleton } from '@/shared/ui/skeleton/CategorySkeleton.tsx'

import styles from './styles.module.scss'

export const TopCategories = () => {
	const [items, setItems] = useState<Category[]>([])

	// Стейт для cursor-пагинации
	const [cursor, setCursor] = useState<string | null>(null)

	const userWidth = window.innerWidth
	const gamesQuantity = userWidth > 1700 ? 5 : 4

	const {
		data: categories,
		isFetching: isCategoriesFetching,
		isLoading: isCategoriesLoading
	} = useGetTopCategoriesQuery(
		cursor
			? {
					first: gamesQuantity,
					after: cursor
				}
			: { first: gamesQuantity }
	)

	useEffect(() => {
		if (!categories) return

		setItems(prev => {
			const merged = [...prev, ...categories.data]
			return merged.filter((item, idx, arr) => idx === arr.findIndex(el => el.id === item.id))
		})
	}, [categories])

	return (
		<div className={styles.categories}>
			<div className={styles['category-title']}>
				<h2>Категории в топе</h2>
				<img
					src={Fire}
					alt='fire'
					width='24px'
				/>
			</div>
			<div className={styles['category-cards']}>
				{isCategoriesLoading
					? Array.from({ length: 5 }).map((_, idx) => {
							return <CategorySkeleton key={idx} />
						})
					: items.map(el => {
							return (
								<CategoryCard
									key={el.id}
									categoryName={el.name}
									imageUrl={el.box_art_url}
								/>
							)
						})}
			</div>
			<Button
				className={styles['more-button']}
				isLoading={isCategoriesFetching}
				onClick={() => {
					if (categories) {
						setCursor(categories.pagination.cursor)
					}
				}}
			>
				Еще
			</Button>
		</div>
	)
}
