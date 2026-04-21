import React from 'react'

import { cn } from '@/shared/lib/cn.ts'

import styles from './ErrorAlert.module.scss'

type ErrorAlertProps = {
	text: string
	className?: string
	style?: React.CSSProperties
}

export const ErrorAlert = ({ text, className, style }: ErrorAlertProps) => {
	return (
		<div
			className={cn(styles['error-block'], className)}
			style={style}
		>
			<span>{text}</span>
		</div>
	)
}
