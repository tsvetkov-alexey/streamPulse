import type { ClipResponse } from '@/shared/api/twitch/types.ts'
import { cn } from '@/shared/lib/cn.ts'

import styles from './ClipDetails.module.scss'

interface ClipCardProps {
	clipInfo: ClipResponse
}

// Нижние маленькие карточки выбора клипа
export const ClipCard = ({ clipInfo }: ClipCardProps) => {
	return <div className={cn(styles['info-block'])}></div>
}
