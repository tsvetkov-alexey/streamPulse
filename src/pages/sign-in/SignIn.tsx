import { Button } from '@/shared/ui/button'

import styles from './SignIn.module.scss'

export const SignIn = () => {
	const params = new URLSearchParams({
		response_type: 'code',
		client_id: import.meta.env.VITE_TWITCH_CLIENT_ID as string,
		redirect_uri: 'https://localhost:3000',
		scope: 'user:read:email'
	})

	return (
		<div className={styles['auth-block']}>
			<div className={styles['auth-block_wrapper']}>
				<h2>Protected authentication with Twitch</h2>
				<Button href={`https://id.twitch.tv/oauth2/authorize?${params.toString()}`}>Connect with Twitch</Button>
			</div>
		</div>
	)
}
