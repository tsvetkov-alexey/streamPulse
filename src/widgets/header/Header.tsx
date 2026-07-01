import { useNavigate } from 'react-router'

import { useGetStreamerInfoByLoginQuery } from '@/shared/api/twitch/twitchApi.ts'
import { BarsLoader } from '@/shared/ui/bars-loader'

import styles from './Header.module.scss'

export const Header = () => {
	const { data: userInfo, isLoading: isUserInfoLoading, isError: isUserInfoError } = useGetStreamerInfoByLoginQuery({})
	const navigate = useNavigate()

	const handleLogout = () => {
		sessionStorage.removeItem('twitch_access_token')
		void navigate('/sign-in', { replace: true })
	}

	return (
		<div className={styles.header}>
			<h2 className={styles.title}>StreamPulse</h2>
			<div className={styles.profile}>
				{isUserInfoLoading ? (
					<BarsLoader size={36} />
				) : (
					<>
						<img
							src={userInfo?.data[0]?.profile_image_url}
							alt='profile-icon'
							width={36}
						/>
						<span>{userInfo?.data[0]?.login}</span>
						<span onClick={handleLogout}>Выйти</span>
					</>
				)}
			</div>
		</div>
	)
}
