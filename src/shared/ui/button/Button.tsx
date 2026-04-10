import React from 'react'
import { cn } from '@/shared/lib/cn.ts'
import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	isLoading?: boolean
	disabled?: boolean
}

export const Button = ({ children, className, onClick, isLoading, disabled }: ButtonProps) => {
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
