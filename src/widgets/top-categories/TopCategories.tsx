import Fire from '@/shared/assets/images/fire.png'
import { CategoryCard } from '@/widgets/top-categories'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/cn.ts'
import { useGetTopCategoriesQuery } from '@/shared/api/twitch/twitchApi.ts'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import type { Category } from '@/shared/api/twitch/types.ts'
import { CategorySkeleton } from '@/shared/ui/skeleton/CategorySkeleton.tsx'

export const TopCategories = () => {
	const [items, setItems] = useState<Category[]>([])

	// Стейт для cursor-пагинации
	const [cursor, setCursor] = useState<string | null>(null)

	const {
		data: categories,
		isFetching: isCategoriesFetching,
		isLoading: isCategoriesLoading
	} = useGetTopCategoriesQuery(
		cursor
			? {
					first: 5,
					after: cursor
				}
			: { first: 5 }
	)

	useEffect(() => {
		if (!categories) return

		setItems(prev => {
			const merged = [...prev, ...categories?.data]
			return merged.filter((item, idx, arr) => idx === arr.findIndex(el => el.id === item.id))
		})
	}, [categories])

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
				{isCategoriesLoading
					? Array.from({ length: 5 }).map((_, idx) => {
							return <CategorySkeleton key={idx} />
						})
					: items?.map(el => {
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
				isLoading={isCategoriesFetching}
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
