import { isRouteErrorResponse, useRouteError } from 'react-router'

import styles from './RouteErrorPage.module.scss'

export const RouteErrorPage = () => {
	const error = useRouteError()

	return (
		<div className={styles['block-error']}>
			<h1>Что-то пошло не так</h1>
			<p>{isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : 'Попробуйте обновить страницу'}</p>
		</div>
	)
}
