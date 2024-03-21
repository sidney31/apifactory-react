import { ReactNode } from 'react'
import styles from './Navbar.module.scss'

export interface Props {
	className?: string
	position: Position
	logo_path: string
	right_side: ReactNode
}

export enum Position {
	top = 'fixed',
	bottom = 'relative',
}

export const Navbar = (props: Props) => {
	const scrollHandler = () => {
		const HERO_HEIGHT = document.querySelector("[class*='hero']")?.clientHeight
		if (!HERO_HEIGHT) return false
		// TODO: xD
		const scrollTop =
			window.scrollY > HERO_HEIGHT / 2
				? window.scrollY / 10 > 100
					? 100
					: window.scrollY / 10
				: 0
		document
			.querySelector('nav')
			?.setAttribute(
				'style',
				`background-color: rgba(255, 255, 255, ${scrollTop}%)`
			)
	}

	if (props.position === Position.top)
		document.addEventListener('scroll', scrollHandler)

	return (
		<nav className={`${styles.navbar} ${props.position} ${props.className}`}>
			<div className={styles.navbar_nav__container}>
				<a href='#' className={styles.navbar_logo}>
					<img className='py-[10px]' src={props.logo_path} alt='logo' />
				</a>
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
				<div className={styles.rightSide}>{props.right_side}</div>
			</div>
		</nav>
	)
}
