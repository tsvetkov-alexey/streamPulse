import type { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'

import styles from './styles.module.scss'

interface ErrorBoundaryProps {
	children: ReactNode
	fallback?: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = {
		hasError: false,
		error: null
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.warn('[ErrorBoundary]', error, info.componentStack)
	}

	handleReset = () => {
		this.setState({ hasError: false, error: null })
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) return this.props.fallback

			return (
				<div className={styles.wrapper}>
					<h2>Что-то пошло не так</h2>
					<pre>{this.state.error?.message}</pre>
					<button onClick={this.handleReset}>Перезагрузить страницу</button>
				</div>
			)
		}

		return this.props.children
	}
}
