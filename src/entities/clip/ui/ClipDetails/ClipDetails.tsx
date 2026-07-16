import type { ClipResponse } from '@/shared/api/twitch/types.ts'
import { cn } from '@/shared/lib/cn.ts'

import styles from './ClipDetails.module.scss'

interface ClipInfoProps {
	clipInfo: ClipResponse
}

// Блок с подробной информацией по клипу (правая часть)
export const ClipDetails = ({ clipInfo }: ClipInfoProps) => {
	return <div className={cn(styles['info-block'])}></div>
}
