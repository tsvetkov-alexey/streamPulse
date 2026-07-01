import { createBrowserRouter } from 'react-router'

import { MainLayout } from '@/app/layouts/MainLayout'

import { Home } from '@/pages/home'
import { SignIn } from '@/pages/sign-in'
import { TwitchCallback } from '@/pages/twitch-callback'

import { RequireAuth } from '../guards/RequireAuth.tsx'

export const routerConfig = createBrowserRouter([
	{
		path: '/sign-in',
		element: <SignIn />
	},
	{
		path: '/auth/twitch/callback',
		element: <TwitchCallback />
	},
	{
		element: <RequireAuth />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: '/',
						element: <Home />
					}
				]
			}
		]
	}
])
