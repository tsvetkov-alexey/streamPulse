import { createBrowserRouter } from 'react-router'

import { MainLayout } from '@/app/layouts/MainLayout'
import { RequireAuth } from '@/app/providers/router/guards/RequireAuth.tsx'
import { RouteErrorPage } from '@/app/providers/router/ui/route-error-page'

import { Home } from '@/pages/home'
import { SignIn } from '@/pages/sign-in'
import { TwitchCallback } from '@/pages/twitch-callback'

export const routerConfig = createBrowserRouter([
	{
		errorElement: <RouteErrorPage />,
		children: [
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
		]
	}
])
