import dayjs from 'dayjs'

import 'dayjs/locale/ru'

dayjs.locale('ru')

export const formatDate = (date: string): string => {
	return dayjs(date).format('D MMMM YYYY')
}