import { Navbar } from '../../components/navbar/Navbar.tsx'
import { QuestionBox } from '../../components/QuestionBox.tsx'
import { CardsSection } from '../../components/sections/CardsSection/CardsSection.tsx'
import { TextSection } from '../../components/sections/TextSection/TextSection.tsx'
import { TwiceSection } from '../../components/sections/TwiceSection/TwiceSection.tsx'
import { Wave } from '../../components/wave/Wave.tsx'
import '../../scripts/scrollHandler.js'
import app from '../../styles/app.module.scss'
import '../../styles/common.scss'

function Home() {
	const OUTSOURCING_BLOCK = {
		text_small: 'Аутсорсинг',
		text_title: 'Трансформируйте свой бизнес с помощью наших решений',
		text_subtitle:
			'Мы предлагаем широкий спектр услуг ИТ-аутсорсинга, которые помогут предприятиям оптимизировать операции, снизить затраты и стимулировать рост. Наша команда экспертов будет тесно сотрудничать с вами, чтобы понять ваши уникальные потребности и предложить индивидуальные решения, соответствующие вашим целям.',
		text_subtitle_button: 'Заказать презентацию',
		image_path: '',
	}

	const INNOVATIONS_BLOCK = {
		text_small: 'Инновации',
		text_title: 'Мы используем собственные разработки',
		text_subtitle:
			'Наша команда опытных разработчиков применяет передовые технологии и инновационные подходы для достижения решений, которые автоматизируют процессы и повышают эффективность вашего бизнеса',
		text_subtitle_button: 'Заказать презентацию',
		image_path: '',
	}

	const SERVICE_BLOCK = {
		text_title: 'Получите комплексные услуги ИТ-аутсорсинга',
		text_subtitle:
			'Наш процесс предоставления услуг ИТ-аутсорсинга прост и эффективен. Сначала мы анализируем ваши требования и создаем индивидуальный план. Затем наша команда экспертов занимается разработкой и внедрением. Наконец, мы обеспечиваем постоянную поддержку и обслуживание для обеспечения бесперебойной работы.',
		cards: [
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
		],
	}
	const SECURITY_BLOCK = {
		text_title: 'Современные технологии информационной безопасности',
		text_subtitle:
			'Наши сервисы позволяет вашей компании передать всю ответственность за защиту данных профессиональной команде экспертов в области ИБ. Мы обеспечим постоянный мониторинг, анализ уязвимостей, реагирование на инциденты и обучение персонала, чтобы обеспечить комплексную безопасность вашей информации.',
		cards: [
			{
				image_path: '/',
				title: 'Противодействие утечкам информации',
				subtitle:
					'Сервис DLP обеспечивает защиту конфиденциальных данных и информации компании, помогая предотвратить утечки и соблюдать законы о персональных данных.',
			},
			{
				image_path: '/',
				title: 'Управление уязвимостями',
				subtitle:
					'Мы помогаем своевременно обнаружить, классифицировать и устранить уязвимости в ИТ-системах, обеспечивая безопасность бизнеса.',
			},
			{
				image_path: '/',
				title: 'Цифровая криминалистика',
				subtitle:
					'Мы предоставляем экспертную помощь в расследовании киберпреступлений, анализе цифровых следов и обеспечении безопасности информации.',
			},
		],
	}

	const TEXT_SECTION_BLOCK = {
		text_small: 'Информационная безопасность',
		text_title: 'Надежные решения информационной безопасности для бизнеса',
		text_content:
			'Повысьте свой уровень безопасности с помощью наших экспертных аутсорсинговых услуг по информационной безопасности. Наша команда сертифицированных профессионалов предлагает комплексные решения для защиты ваших данных и инфраструктуры. Мы обеспечим вас от оценки рисков до реагирования на инциденты. Сосредоточьтесь на своем основном бизнесе, пока мы занимаемся вашей кибербезопасностью',
		button_text: 'Узнать больше',
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
					text_small={OUTSOURCING_BLOCK.text_small}
					text_title={OUTSOURCING_BLOCK.text_title}
					text_subtitle={OUTSOURCING_BLOCK.text_subtitle}
					text_subtitle_button={OUTSOURCING_BLOCK.text_subtitle_button}
					image_path={OUTSOURCING_BLOCK.image_path}
				/>
				<CardsSection
					className='bg-[#f5f5f5]'
					text_title={SERVICE_BLOCK.text_title}
					text_subtitle={SERVICE_BLOCK.text_subtitle}
					cards={SERVICE_BLOCK.cards}
				/>
				<TextSection
					text_small={TEXT_SECTION_BLOCK.text_small}
					text_title={TEXT_SECTION_BLOCK.text_title}
					text_content={TEXT_SECTION_BLOCK.text_content}
					button_text={TEXT_SECTION_BLOCK.button_text}
				/>
				<CardsSection
					className='bg-[white]'
					text_title={SECURITY_BLOCK.text_title}
					text_subtitle={SECURITY_BLOCK.text_subtitle}
					cards={SECURITY_BLOCK.cards}
				/>
				<TwiceSection
					className='bg-[#f5f5f5]'
					text_small={INNOVATIONS_BLOCK.text_small}
					text_title={INNOVATIONS_BLOCK.text_title}
					text_subtitle={INNOVATIONS_BLOCK.text_subtitle}
					text_subtitle_button={INNOVATIONS_BLOCK.text_subtitle_button}
					image_path={INNOVATIONS_BLOCK.image_path}
				/>
				<section>
					<div className='container'>
						<QuestionBox
							question='Что такое аутсорсинг IT-услуг?'
							answer='ИТ-аутсорсинг — это практика найма внешних поставщиков услуг для выполнения задач и функций, связанных с ИТ.'
						/>
					</div>
				</section>
			</main>
		</>
	)
}

export default Home
