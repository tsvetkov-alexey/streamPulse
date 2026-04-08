import React from 'react'
import { cn } from '@/shared/lib/cn.ts'
import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
	disabled?: boolean
}

export const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, className)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
