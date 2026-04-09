import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { baseApi } from '@/shared/api/base/baseApi.ts'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware)
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
