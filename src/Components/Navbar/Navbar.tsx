import styles from './Navbar.module.scss'

export const Navbar = function () {
	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.navbar_navContainer}>
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
