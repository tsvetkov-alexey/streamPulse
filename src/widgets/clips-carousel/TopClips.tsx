import { ClipDetails } from '@/entities/clip/ui/ClipDetails'
import { ClipPreview } from '@/entities/clip/ui/ClipPreview'

import styles from './styles.module.scss'

// общий виджет, где собирается вся логика по клипам
export const TopClips = () => {
	return (
		<div className={styles['clips']}>
			<ClipPreview />
			<ClipDetails />
		</div>
	)
}
