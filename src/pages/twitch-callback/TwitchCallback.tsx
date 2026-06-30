import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const TwitchCallback = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const auth = () => {
			const hash = window.location.hash.replace('#', '')
			const searchParams = new URLSearchParams(hash)

			const accessToken = searchParams.get('access_token')
			const state = searchParams.get('state')
			const savedState = sessionStorage.getItem('twitch_oauth_state')

			if (!accessToken || !state || state !== savedState) {
				void navigate('/sign-in', { replace: true })
				return
			}

			sessionStorage.removeItem('twitch_oauth_state')
			sessionStorage.setItem('twitch_access_token', accessToken)

			void navigate('/', { replace: true })
		}

		auth()
	}, [navigate])

	return <div>Авторизация через Twitch</div>
}
