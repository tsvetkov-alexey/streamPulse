import { useEffect, useState } from 'react'

import type { Category } from '@/entities/category/model/types.ts'
import { CategoryCard } from '@/entities/category/ui/CategoryCard'

import { useGetTopCategoriesQuery } from '@/shared/api/twitch/twitchApi.ts'
import Fire from '@/shared/assets/images/fire.png'
import { useWindowWidth } from '@/shared/lib/browser/useWindowWidth.ts'
import { Button } from '@/shared/ui/button'
import { CategorySkeleton } from '@/shared/ui/skeleton/CategorySkeleton.tsx'

import styles from './styles.module.scss'

const CATEGORY_BREAKPOINT = 1700
const CATEGORY_CARD_WIDTH = 300
const CATEGORY_CARD_HEIGHT = 400

export const TopCategories = () => {
	const [items, setItems] = useState<Category[]>([])

	// Стейт для cursor-пагинации
	const [cursor, setCursor] = useState<string | null>(null)

	const userWidth = useWindowWidth()
	const gamesQuantity = userWidth > CATEGORY_BREAKPOINT ? 5 : 4

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

	const skeletons = Array.from({ length: gamesQuantity }).map((_, idx) => {
		return (
			<CategorySkeleton
				key={idx}
				width={CATEGORY_CARD_WIDTH}
				height={CATEGORY_CARD_HEIGHT}
			/>
		)
	})

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
					? skeletons
					: items.map(el => {
							return (
								<CategoryCard
									key={el.id}
									gameId={el.id}
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
