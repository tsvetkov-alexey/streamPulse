import { createBrowserRouter } from 'react-router'

import { Home } from '@/pages/home'
import { SignIn } from '@/pages/sign-in'

export const routerConfig = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/sign-in',
		element: <SignIn />
	}
])
