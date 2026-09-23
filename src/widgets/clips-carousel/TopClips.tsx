import { ClipDetails } from '@/entities/clip/ui/ClipDetails'
import { ClipPreview } from '@/entities/clip/ui/ClipPreview'

import { useGetClipInfoByGameIdQuery } from '@/shared/api/twitch/twitchApi.ts'

import styles from './styles.module.scss'

// общий виджет, где собирается вся логика по клипам
export const TopClips = () => {
	const {
		data: clipData,
		isFetching: isClipDataFetching,
		isError: isClipDataError
	} = useGetClipInfoByGameIdQuery({ gameId: 509658, first: 1 })

	return (
		<div className={styles['clips']}>
			<ClipPreview />
			<ClipDetails clipInfo={clipData?.data[0]} />
		</div>
	)
}
