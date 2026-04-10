import type { ComponentProps } from 'react'
import ContentLoader from 'react-content-loader'

type CategorySkeletonProps = ComponentProps<typeof ContentLoader>

export const CategorySkeleton = (props: CategorySkeletonProps) => {
	return (
		<ContentLoader
			speed={2}
			width={220}
			height={380}
			viewBox='0 0 220 380'
			backgroundColor='#dfdede'
			foregroundColor='#ecebeb'
			{...props}
		>
			<rect
				x='0'
				y='0'
				rx='20'
				ry='20'
				width='220'
				height='380'
			/>
		</ContentLoader>
	)
}
