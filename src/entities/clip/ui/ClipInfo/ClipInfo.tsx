import type { ClipResponse } from '@/shared/api/twitch/types.ts'
import { cn } from '@/shared/lib/cn.ts'

import styles from './ClipInfo.module.scss'

interface ClipInfoProps {
	clipInfo: ClipResponse
}

export const ClipInfo = ({ clipInfo }: ClipInfoProps) => {
	return <div className={cn(styles['info-block'])}></div>
}
