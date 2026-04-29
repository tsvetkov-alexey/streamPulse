import React from 'react'

import { cn } from '@/shared/lib/cn.ts'

import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	isLoading?: boolean
	disabled?: boolean
	href?: string
	target?: string
}

export const Button = ({ children, className, onClick, isLoading, disabled, href, target }: ButtonProps) => {
	if (href) {
		return (
			<a
				href={href}
				target={target}
				rel='noopener noreferrer'
				className={cn(styles.button, isLoading && styles.loading, className)}
			>
				{children}
			</a>
		)
	}
	return (
		<button
			className={cn(styles.button, isLoading && styles.loading, className)}
			onClick={onClick}
			disabled={disabled || isLoading}
		>
			{children}
		</button>
	)
}
