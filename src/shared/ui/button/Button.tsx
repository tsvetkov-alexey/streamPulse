import React from 'react'

import { cn } from '@/shared/lib/cn.ts'

import styles from './Button.module.scss'

type IconPosition = 'left' | 'right'

interface ButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	isLoading?: boolean
	disabled?: boolean
	href?: string
	target?: string
	icon?: React.ReactNode
	iconPosition?: IconPosition
}

export const Button = ({
	children,
	className,
	onClick,
	isLoading,
	disabled,
	href,
	target,
	icon,
	iconPosition = 'left'
}: ButtonProps) => {
	const content = (
		<span className={cn(styles.content, iconPosition === 'right' && styles.contentRight)}>
			{icon && <span className={styles.icon}>{icon}</span>}
			<span>{children}</span>
		</span>
	)

	if (href) {
		return (
			<a
				href={href}
				target={target}
				rel='noopener noreferrer'
				className={cn(styles.button, isLoading && styles.loading, className)}
			>
				{content}
			</a>
		)
	}
	return (
		<button
			className={cn(styles.button, isLoading && styles.loading, className)}
			onClick={onClick}
			disabled={disabled || isLoading}
		>
			{content}
		</button>
	)
}
