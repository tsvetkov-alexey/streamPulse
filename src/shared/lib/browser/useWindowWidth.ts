import { useEffect, useState } from 'react'

// Хук необходимый для получения ширины экрана пользователя

const getWindowWidth = () => {
	return typeof window === 'undefined' ? 0 : window.innerWidth
}

export const useWindowWidth = () => {
	const [width, setWidth] = useState(getWindowWidth)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return width
}
