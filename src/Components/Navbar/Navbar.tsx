import styles from './Navbar.module.scss'

export const Navbar = () => {
	const scrollHandler = () => {
		const HERO_HEIGHT = document.querySelector("[class*='hero']")?.clientHeight
		if (!HERO_HEIGHT) return false
		const scrollTop = window.scrollY > HERO_HEIGHT / 2 ? window.scrollY / 10 : 0
		document
			.querySelector('nav')
			?.setAttribute(
				'style',
				`background-color: rgba(255, 255, 255, ${scrollTop}%)`
			)
	}

	document.addEventListener('scroll', scrollHandler)

	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.navbar_nav__container}>
					<a href='#' className={styles.navbar_logo}></a>
					<div className={styles.navbar_menu}>
						<ul className={styles.navbar_menuList}>
							<li className={styles.navbar_menuListItem}>
								<a href='' className={styles.navbar_menuLink}>
									О компании
								</a>
							</li>
							<li className={styles.navbar_menuListItem}>
								<a href='' className={styles.navbar_menuLink}>
									Услуги
								</a>
							</li>
							<li className={styles.navbar_menuListItem}>
								<a href='' className={styles.navbar_menuLink}>
									Контакты
								</a>
							</li>
						</ul>
					</div>
					<button className={styles.navbar_login}>Вход для клиентов</button>
				</div>
			</nav>
		</>
	)
}
