import cls from './Header.module.scss'

export const Header = () => {
	return (
		<div className={cls.header}>
			<h2 className={cls.title}>StreamPulse</h2>
			<div className={cls.auth}>
				<span>Вход</span>
				<span>Регистрация</span>
			</div>
		</div>
	)
}
