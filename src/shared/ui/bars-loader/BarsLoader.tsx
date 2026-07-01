import type { CSSProperties } from 'react'

import styles from './BarsLoader.module.scss'

interface BarsLoaderProps {
	size?: number
}

export const BarsLoader = ({ size }: BarsLoaderProps) => {
	const loaderStyle: CSSProperties | undefined = size
		? {
				width: size,
				height: size
			}
		: undefined

	return (
		<div
			style={loaderStyle}
			className={styles.loader}
		></div>
	)
}
