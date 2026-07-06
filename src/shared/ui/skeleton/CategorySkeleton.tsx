import type { ComponentProps } from 'react'
import ContentLoader from 'react-content-loader'

type CategorySkeletonProps = Omit<ComponentProps<typeof ContentLoader>, 'width' | 'height' | 'viewBox'> & {
	width?: number
	height?: number
}

export const CategorySkeleton = ({ width = 340, height = 380, ...props }: CategorySkeletonProps) => {
	return (
		<ContentLoader
			speed={2}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			backgroundColor='#dfdede'
			foregroundColor='#ecebeb'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='20'
				ry='20'
				width={width}
				height={height}
			/>
		</ContentLoader>
	)
}
