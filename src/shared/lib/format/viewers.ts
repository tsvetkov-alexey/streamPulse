export const formatStreamerViewers = (count: number) =>
	new Intl.NumberFormat('ru-RU', { notation: 'compact' }).format(count)

export const formatViewers = (value: number) => {
	if (value >= 1_000_000) {
		return `${(value / 1_000_000).toFixed(1)}M`
	}

	if (value >= 1_000) {
		return `${Math.round(value / 1_000)}K`
	}

	return String(value)
}
