import { Card } from '../../Card'
import styles from './CardsSection.module.scss'

export interface Props {
	className: string
	cards: Array<Card>
}

export interface Card {
	image_path: string
	title: string
	subtitle: string
}

export const CardsSection = (props: Props) => {
	return (
		<section className={props.className}>
			<div className='container'>
				<div className={styles.text}>
					<p className={styles.text_title}>
						Получите комплексные услуги ИТ-аутсорсинга
					</p>
					<p className={styles.text_subtitle}>
						Наши сервисы позволяет вашей компании передать всю ответственность
						за защиту данных профессиональной команде экспертов в области ИБ. Мы
						обеспечим постоянный мониторинг, анализ уязвимостей, реагирование на
						инциденты и обучение персонала, чтобы обеспечить комплексную
						безопасность вашей информации.
					</p>
				</div>
				<div className={styles.cards}>
					{props.cards.map(card => (
						<Card
							image_path={card.title}
							title={card.title}
							subtitle={card.subtitle}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
