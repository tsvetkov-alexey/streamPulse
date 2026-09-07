import type { ClipResponse } from '@/shared/api/twitch/types.ts'

import styles from './ClipCard.module.scss'

interface ClipCardProps {
	clipInfo: ClipResponse
}

// Нижние маленькие карточки выбора клипа
export const ClipCard = ({ clipInfo }: ClipCardProps) => {
	return <div className={styles['info-block']}></div>
}
