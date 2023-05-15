import { FlexGrid, Heading, Paper, Paragraph } from '../../entities/ui'
import chimera from '../../assets/chimera.png'
import type { IStock, ITab } from '../../app/types'
import { Countdown, Tabs } from '../../widget/components'
import { useState } from 'react'
import { Switchboard } from '../../features/components'
import classNames from 'classnames'
import styles from './Chimera.module.css'
import React from 'react'

const tabList: ITab[] = [
	{ id: 1, title: 'Акции', picture: 'picture1.png' },
	{ id: 2, title: 'Правила', picture: 'picture2.png' },
]

const stocks: IStock[] = [
	{
		id: 1,
		title: 'Охота за легендарной пешкой.',
		description: `Улучше одну легендарную пешку и получи 30 алмазов.`,
		type: 'D',
		victorsList: [],
		timerIsoEndEvent: '2023-04-25',
	},
	{
		id: 2,
		title: 'Cкоростя на максимум.',
		description: `Участвуй в турнире и набери максимальное количество очков,
		играя тапки как можно больше. Двое самых быстрых участников
		будут награждены.`,
		type: 'S',
		victorsList: ['Mudya', 'Every'],
		timerIsoEndEvent: '2023-05-07',
	},
	{
		id: 3,
		title: 'Время в спять.',
		description: `Прими участие в событии, получи пешку этого события и верни себе 50 платины.`,
		type: 'S',
		victorsList: [],
		timerIsoEndEvent: '2023-05-19',
		explanation: true,
	},
]

const reverseStocks = [...stocks.reverse()]

function Chimera() {
	const [tabIdMenu, setTabIdMenu] = useState(1)
	return (
		<>
			<div className={classNames(styles.header)}>
				<img className={classNames(styles.header_logo)} src={chimera} alt="chimera" />
				<Heading size="medium" tag="h1">
					Chimera
				</Heading>
				<Paragraph size="small" appearance="secondary">
					596597
				</Paragraph>
			</div>
			<section className={classNames(styles.tabbed_container)}>
				<Paper className={styles.tabbed_menu} appearance="primary">
					<Tabs
						className={styles.tabbed_item}
						appearance="primary"
						tabId={tabIdMenu}
						tabList={tabList}
						setTabId={setTabIdMenu}
					/>
				</Paper>
			</section>
			<div className={classNames(styles.tabbed_container)}>
				<div className={classNames(styles.tabbed_content)}>
					<Switchboard
						id={tabIdMenu}
						content={[
							reverseStocks.map((item: IStock) => (
								<FlexGrid key={item.id} childrenFill={true}>
									<div className={classNames(styles.content_item)}>
										<Heading size="medium" tag="h2">
											{item.title}
										</Heading>
										<Paragraph appearance="secondary" size="medium">
											{item.description + ' '}
											{item.explanation ? (
												<>
													<span className={styles.info}>
														Для получения награды необходимо сделать три
														фотографии и отправить в
													</span>
													<a
														className={styles.link}
														target="_blank"
														href="https://discord.gg/3mHhtzHp">
														discord канал
													</a>
													<span className={styles.info}>
														первая - магазина до покупки пешки, вторая -
														магазина после покупки пешки, и третья - с
														пешкой в инвентаре.
													</span>
												</>
											) : null}
										</Paragraph>
										<Paper appearance="secondary" isCenterContent>
											<Countdown timerIsoEndEvent={item.timerIsoEndEvent}>
												<br />
												<Paragraph size="medium" appearance="white">
													Осталось до конца акции.
												</Paragraph>
											</Countdown>
										</Paper>
										{item.victorsList.length > 0 ? (
											<Paragraph appearance="secondary" size="medium">
												Победили
												{item.victorsList.map((victors, index) => (
													<React.Fragment key={index}>
														<span className={styles.victors}>
															{victors}
														</span>
													</React.Fragment>
												))}
											</Paragraph>
										) : (
											<Paragraph appearance="secondary" size="medium">
												Победителей нет!
											</Paragraph>
										)}
									</div>
									<div
										className={classNames(
											styles.content_item,
											styles.center_item
										)}>
										<Paragraph size="extra" appearance="secondary">
											{item.type}
										</Paragraph>
									</div>
								</FlexGrid>
							)),

							<div className={styles.rules}>
								<Heading tag="h2" size="medium">
									Основные
								</Heading>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.1 ~ </span>Любой
										человек, пришедший в наш клан, автоматически соглашается с
										данным сводом правил и обязуется выполнять их.
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.2 ~ </span>
										Модераторы игрового сервера имеют полное право заблокировать
										вам доступ к входу в канал или в сам клан за нарушение того
										или иного пункта данного свода правил.
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.3 ~ </span>
										Независимо от статуса игрока, Охотник, Заклинатель, Архимаг,
										Модератор - все равны и все понесут наказание за нарушение
										правил, Исключение по пунктам
										<a
											className={classNames(styles.link, styles.rules_link)}
											href="#t">
											T.
										</a>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.4 ~ </span>
										Незнание правил не освобождает вас от ответственности.
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.5 ~ </span>
										Наказание выдаются по пункту правил и заголовку.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											Пример - /warn @Dan4ik 3.1
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.6 ~ </span>
										сключение/наказание игрока запрещается если в клане менее 21
										человека. Исключение
										<a
											className={classNames(styles.link, styles.rules_link)}
											href="#t">
											Т 3.1.
										</a>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.7 ~ </span>
										Перед выдачей наказания Модератор обязуется предупредить о
										выдаче наказания в бан-лист, а так же донести до игрока
										пункт нарушения.
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>1.8 ~ </span>
										Правила могут быть изменены/отформатированы.
									</Paragraph>
								</Paper>
								<br></br>
								<br></br>
								<Heading tag="h2" size="medium">
									Общение в чате
								</Heading>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>2.1 ~ </span>
										Запрещено употреблять мат, в том числе завуалированный и/или
										на иностранном языке.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- предупреждение = предупреждение = warn
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>2.2 ~ </span>
										Запрещено оскорбительное поведение по отношению к другим
										игрокам.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- предупреждение = предупреждение = warn
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>2.3 ~ </span>
										Запрещен флуд в чатах.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- предупреждение = предупреждение = предупреждение =
											warn
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>2.4 ~ </span>
										Запрещено упоминать (в оскорбительной/унизительной форме),
										унижать, оскорблять Родителей и Родственников.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- warn
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>2.5 ~ </span>
										Запрещена реклама.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- warn
										</span>
									</Paragraph>
								</Paper>
								<br></br>
								<br></br>
								<Heading id="t" tag="h2" size="medium">
									Турнир
								</Heading>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>3.1 ~ </span>
										Отказываться от турнира или игнорировать его.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- warn
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>3.2 ~ </span>
										Относится к турниру как к необязательной форме игрового
										процесса.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- предупреждение + многократно = warn
										</span>
									</Paragraph>
								</Paper>
								<Paper className={styles.rules_item} appearance="light">
									<Paragraph size="medium" appearance="secondary">
										<span className={styles.rules_accent}>3.3 ~ </span>
										Игнорировать требования модерации о просьбе участие в
										турнире.
										<span
											className={classNames(styles.info, styles.rules_info)}>
											- предупреждение = warn
										</span>
									</Paragraph>
								</Paper>
							</div>,

							<Paragraph size="medium" appearance="primary">
								Критерии скоро появятся
							</Paragraph>,
						]}
					/>
				</div>
			</div>
		</>
	)
}

export { Chimera }
