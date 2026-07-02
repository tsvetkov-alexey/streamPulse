import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from '@/app/App.tsx'
import { store } from '@/app/store.ts'

import { ErrorBoundary } from '@/shared/ui/error-boundary/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<StrictMode>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</StrictMode>
	</Provider>
)
