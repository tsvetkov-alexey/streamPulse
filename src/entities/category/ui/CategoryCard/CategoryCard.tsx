import { useGetLiveStreamsQuery } from '@/shared/api/twitch/twitchApi.ts'
import Viewers from '@/shared/assets/svg/viewers.svg'
import { formatImage } from '@/shared/lib/format/image.ts'

import styles from './CategoryCard.module.scss'
import { formatViewers } from '@/shared/lib/format/viewers.ts'
import { BarsLoader } from '@/shared/ui/bars-loader'

interface CategoryCardProps {
	categoryName: string
	imageUrl: string
	gameId: string
}

export const CategoryCard = ({ categoryName, imageUrl, gameId }: CategoryCardProps) => {
	const imageSrc = formatImage(imageUrl, 220, 320)

	const { data: streams, isLoading } = useGetLiveStreamsQuery({ gameId, first: 100 })
	const viewers = streams?.data.reduce((sum, stream) => sum + stream.viewer_count, 0) ?? 0

	return (
		<div className={styles['category-block']}>
			<img
				src={imageSrc}
				className={styles['category-block__image']}
				alt={categoryName}
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
					{isLoading ? <BarsLoader size={14} /> : <span>{formatViewers(viewers)} зрителей</span>}
				</div>
			</div>
		</div>
	)
}
