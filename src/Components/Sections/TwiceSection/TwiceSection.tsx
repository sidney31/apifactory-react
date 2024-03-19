import styles from './TwiceSection.module.scss'

export interface Props {
	text_small: string
	text_title: string
	text_subtitle: string
	text_subtitle_button: string
	image_path: string
}

export const TwiceSection = (props: Props) => {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.text}>
					<p className={styles.text_small}>{props.text_small}</p>
					<p className={styles.text_title}>{props.text_title}</p>
					<p className={styles.text_subtitle}>{props.text_subtitle}</p>
					<button>{props.text_subtitle_button}</button>
				</div>
				<div className={styles.image}></div>
			</div>
		</section>
	)
}
