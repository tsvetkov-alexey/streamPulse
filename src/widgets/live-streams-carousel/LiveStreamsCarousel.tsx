import { useMemo, useState } from 'react'

import { skipToken } from '@reduxjs/toolkit/query'

import { LiveStreamSlide } from '@/widgets/live-streams-carousel/LiveStreamSlide.tsx'

import { useGetLiveStreamerQuery, useGetStreamerInfoByLoginQuery } from '@/shared/api/twitch/twitchApi.ts'
import { BarsLoader } from '@/shared/ui/bars-loader'
import { ErrorAlert } from '@/shared/ui/error-alert'

import styles from './styles.module.scss'

export const LiveStreamsCarousel = () => {
	const [cursorStack, setCursorStack] = useState<string[]>([])
	const currentCursor = cursorStack.length > 0 ? cursorStack[cursorStack.length - 1] : null

	const {
		data: streamData,
		isFetching: isStreamDataFetching,
		isError: isStreamDataError
	} = useGetLiveStreamerQuery(currentCursor ? { first: 1, after: currentCursor } : { first: 1 })

	const currentUserLogin = useMemo(() => {
		if (!streamData) return
		return streamData.data[0]?.user_login
	}, [streamData])

	const currentUserViewers = useMemo(() => {
		if (!streamData) return
		return streamData.data[0]?.viewer_count
	}, [streamData])

	const {
		data: streamerInfo,
		isFetching: isStreamerInfoFetching,
		isError: isStreamerInfoError
	} = useGetStreamerInfoByLoginQuery(currentUserLogin ? { login: currentUserLogin } : skipToken)

	if (isStreamDataError || isStreamerInfoError) {
		return (
			<ErrorAlert
				style={{ margin: '40px 0' }}
				text='Ошибка загрузки данных'
			/>
		)
	}

	return (
		<div className={styles.carousel}>
			<button
				disabled={currentCursor === null}
				onClick={() => {
					if (!streamData) return
					setCursorStack(() => cursorStack.slice(0, -1))
				}}
				className={styles['left-arrow']}
			>
				{'<'}
			</button>
			{isStreamDataFetching || isStreamerInfoFetching ? (
				<div className={styles.container}>
					<BarsLoader />
				</div>
			) : (
				<LiveStreamSlide
					currentUserLogin={currentUserLogin}
					streamerInfo={streamerInfo}
					currentUserViewers={currentUserViewers}
				/>
			)}
			<button
				onClick={() => {
					if (!streamData?.pagination.cursor) return
					setCursorStack(prev => [...prev, streamData.pagination.cursor])
				}}
				className={styles['right-arrow']}
			>
				{'>'}
			</button>
		</div>
	)
}
