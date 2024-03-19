import { Navbar } from './Components/Navbar/Navbar'
import { TwiceSection } from './Components/Sections/TwiceSection/TwiceSection.tsx'
import { Wave } from './Components/Wave/Wave.tsx'
import app from './styles/app.module.scss'
import './styles/common.scss'

function App() {
	var outsourcing_block = {
		text_small: 'Аутсорсинг',
		text_title: 'Трансформируйте свой бизнес с помощью наших решений',
		text_subtitle:
			'Мы предлагаем широкий спектр услуг ИТ-аутсорсинга, которые' +
			'помогут предприятиям оптимизировать операции, снизить затраты' +
			'и стимулировать рост. Наша команда экспертов будет тесно' +
			'сотрудничать с вами, чтобы понять ваши уникальные потребности' +
			'и предложить индивидуальные решения, соответствующие вашим целям.',
		text_subtitle_button: 'Заказать презентацию',
		image_path: '',
	}

	var innovations_block = {
		text_small: 'Инновации',
		text_title: 'Мы используем собственные разработки',
		text_subtitle:
			'Наша команда опытных разработчиков применяет передовые' +
			'технологии и инновационные подходы для достижения решений, которые' +
			'автоматизируют процессы и повышают эффективность вашего бизнеса.',
		text_subtitle_button: 'Заказать презентацию',
		image_path: '',
	}

	return (
		<>
			<Navbar />
			<main>
				<div className={app.hero}>
					<Wave />
					<div className={app.hero_text__container}>
						<h1 className={app.hero_textTitle}>
							Cоздаем пространство эффективности вашего бизнеса
						</h1>
						<p className={app.hero_textSubtitle}>
							Мы ведущая компания по аутсорсингу IT, специализирующаяся на
							предоставлении индивидуальных решений, помогающих бизнесу
							процветать в цифровую эпоху.
							<button className={app.hero_textSubtitle_button}>
								Заказать обратный звонок
							</button>
						</p>
					</div>
				</div>
				<TwiceSection
					text_small={outsourcing_block.text_small}
					text_title={outsourcing_block.text_title}
					text_subtitle={outsourcing_block.text_subtitle}
					text_subtitle_button={outsourcing_block.text_subtitle_button}
					image_path={outsourcing_block.image_path}
				/>
				<TwiceSection
					text_small={innovations_block.text_small}
					text_title={innovations_block.text_title}
					text_subtitle={innovations_block.text_subtitle}
					text_subtitle_button={innovations_block.text_subtitle_button}
					image_path={innovations_block.image_path}
				/>
			</main>
		</>
	)
}

export default App
