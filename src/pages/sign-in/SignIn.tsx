import { env } from '@/shared/config/env.ts'
import { Button } from '@/shared/ui/button'

import styles from './SignIn.module.scss'

export const SignIn = () => {
	const handleConnect = () => {
		const state = crypto.randomUUID()
		sessionStorage.setItem('twitch_oauth_state', state)

		const params = new URLSearchParams({
			response_type: 'token',
			client_id: env.twitchClientId,
			redirect_uri: `${window.location.origin}/auth/twitch/callback`,
			scope: 'user:read:email',
			state
		})

		window.location.href = `https://id.twitch.tv/oauth2/authorize?${params.toString()}`
	}

	return (
		<div className={styles['auth-block']}>
			<div className={styles['auth-block_wrapper']}>
				<h2>Protected authentication with Twitch</h2>
				<Button onClick={handleConnect}>Log in with Twitch</Button>
			</div>
		</div>
	)
}
