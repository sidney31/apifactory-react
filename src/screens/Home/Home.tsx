import { Navbar } from '../../components/navbar/Navbar.tsx'
import { CardsSection } from '../../components/sections/CardsSection/CardsSection.tsx'
import { TwiceSection } from '../../components/sections/TwiceSection/TwiceSection.tsx'
import { Wave } from '../../components/wave/Wave.tsx'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'

function Home() {
	var outsourcing_block = {
		text_small: 'Аутсорсинг',
		text_title: 'Трансформируйте свой бизнес с помощью наших решений',
		text_subtitle:
			'Мы предлагаем широкий спектр услуг ИТ-аутсорсинга, которые помогут предприятиям оптимизировать операции, снизить затраты и стимулировать рост. Наша команда экспертов будет тесно сотрудничать с вами, чтобы понять ваши уникальные потребности и предложить индивидуальные решения, соответствующие вашим целям.',
		text_subtitle_button: 'Заказать презентацию',
		image_path: '',
	}

	var innovations_block = {
		text_small: 'Инновации',
		text_title: 'Мы используем собственные разработки',
		text_subtitle:
			'Наша команда опытных разработчиков применяет передовые технологии и инновационные подходы для достижения решений, которые автоматизируют процессы и повышают эффективность вашего бизнеса',
		text_subtitle_button: 'Заказать презентацию',
		image_path: '',
	}

	var cards = [
		{
			image_path: '/',
			title: 'Системное администрирование',
			subtitle:
				'Наши опытные специалисты по системному администрированию готовы обеспечить непрерывную работу ваших рабочих серверов, электронной почты, средой виртуализации. Мы предлагаем гибкие тарифы и индивидуальный подход к каждому клиенту, чтобы дать вам уверенность в надежности вашей IT-инфраструктуры.',
		},
		{
			image_path: '/',
			title: 'Управление сетями передачи данных',
			subtitle:
				'Мы предлагаем комплексное сопровождение и оптимизацию сетевой инфраструктуры вашей компании. Наши специалисты обеспечат надежную работу сети, контроль за безопасностью данных, мониторинг производительности и своевременное устранение любых неполадок.',
		},
		{
			image_path: '/',
			title: 'Комплексная техническая поддержка',
			subtitle:
				'Услуга предоставляет профессиональное обслуживание и консультации по вопросам информационных технологий. Наша команда всегда на связи и оперативно реагирует на запросы клиентов, гарантируя высокий уровень сервиса и удовлетворение потребностей вашего бизнеса.',
		},
	]

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
				<CardsSection className='bg-[#f5f5f5]' cards={cards} />
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

export default Home
