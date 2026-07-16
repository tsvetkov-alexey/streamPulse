import type { ClipResponse } from '@/shared/api/twitch/types.ts'
import { cn } from '@/shared/lib/cn.ts'

import styles from './ClipDetails.module.scss'

interface ClipPreviewProps {
	clipInfo: ClipResponse
}

// Большой блок-превью выбранного клипа (правая часть)
export const ClipPreview = ({ clipInfo }: ClipPreviewProps) => {
	return <div className={cn(styles['info-block'])}></div>
}
