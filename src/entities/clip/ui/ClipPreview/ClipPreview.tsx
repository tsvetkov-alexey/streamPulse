import { getTwitchClipEmbedUrl } from '@/entities/clip/lib/getTwitchClipEmbedUrl.ts'

import type { ClipByGameId } from '@/shared/api/twitch/types.ts'

import styles from './ClipPreview.module.scss'

interface ClipPreviewProps {
	clipInfo?: ClipByGameId
}

// Большой блок-превью выбранного клипа (левая часть)
export const ClipPreview = ({ clipInfo }: ClipPreviewProps) => {
	// if (!clipInfo) {
	// 	return null
	// }

	return (
		<div className={styles['clip-block']}>
			<iframe
				// src={getTwitchClipEmbedUrl(clipInfo.embed_url)}
				// title={clipInfo.title}
				width='100%'
				height={420}
				allow='autoplay; fullscreen'
				allowFullScreen
			/>
		</div>
	)
}
