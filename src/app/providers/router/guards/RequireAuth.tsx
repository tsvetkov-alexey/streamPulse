import { Navigate, Outlet } from 'react-router'

export const RequireAuth = () => {
	const token = sessionStorage.getItem('twitch_access_token')

	if (!token) {
		return (
			<Navigate
				to='/sign-in'
				replace
			/>
		)
	}

	return <Outlet />
}
