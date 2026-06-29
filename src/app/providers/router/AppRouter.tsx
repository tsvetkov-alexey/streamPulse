import { RouterProvider } from 'react-router'

import { routerConfig } from './config/routerConfig.tsx'

export const AppRouter = () => {
	return <RouterProvider router={routerConfig} />
}
