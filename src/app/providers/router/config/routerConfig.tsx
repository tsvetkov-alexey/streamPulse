import { createBrowserRouter } from 'react-router'

import { Home } from '@/pages/home'
import { SignIn } from '@/pages/sign-in'
import { TwitchCallback } from '@/pages/twitch-callback'

import { RequireAuth } from '../guards/RequireAuth.tsx'

export const routerConfig = createBrowserRouter([
	// Роуты без авторизации
	{
		path: '/sign-in',
		element: <SignIn />
	},
	{
		path: '/auth/twitch/callback',
		element: <TwitchCallback />
	},
	// Роуты, доступные только после авторизации
	{
		element: <RequireAuth />,
		children: [
			{
				path: '/',
				element: <Home />
			}
		]
	}
])
