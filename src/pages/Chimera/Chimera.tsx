import { Button, FlexGrid, Heading, Paper, Paragraph } from '../../entities/ui'
import chimera from '../../assets/chimera.png'
import type { IStock, ITab } from '../../app/types'
import { Tabs } from '../../widget/components'
import { useState } from 'react'
import { Countdown, Switchboard } from '../../features/components'
import classNames from 'classnames'
import styles from './Chimera.module.css'
import { Link } from '../../entities/ui/Link/Link'
import { v4 as uui } from 'uuid'
import React from 'react'
import { Description, promotions } from '../../app/models/promotions'

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
		victorsList: ['MrCmerte', 'Player60161283', 'Mudya', 'Бу!бновыйБунт@рь'],
		timerIsoEndEvent: '2023-05-19',
		explanation: true,
	},
	{
		id: 4,
		title: 'Гонка со своими.',
		description: `Прими участие в событии, получи пешку этого события и верни себе 50 платины. 
		Первые два победителя получают награду сразу, третий будет выбран случайным образом среди всех остальных.`,
		type: 'S',
		victorsList: [],
		timerIsoEndEvent: '2023-06-24',
		explanation: true,
	},
]

const reversePromotions = [...promotions.reverse()]

function Chimera() {
	const [tabIdMenu, setTabIdMenu] = useState(1)
	return (
		<>
			<div className={classNames(styles.header)}>
				<img className={classNames(styles.header_logo)} src={chimera} alt="chimera" />
				<Heading appearance="primary" size="medium" tag="h1">
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
							reversePromotions.map((promotion) => (
								<FlexGrid key={promotion.id} margin="medium" childrenFill={false}>
									<div className={styles.switchboard_item}>
										<Heading appearance="primary" size="medium" tag="h2">
											{promotion.title}
										</Heading>

										{promotion.blocks.map((block) => (
											<div
												key={block.id}
												className={styles.description_block}>
												{block.descriptions.map((description) => (
													<React.Fragment key={description.id}>
														{description.type === Description.TEXT && (
															<Paragraph
																className={styles.switchboard_text}
																appearance="secondary"
																size="medium">
																{description.text}
															</Paragraph>
														)}

														{description.type === Description.LINK &&
															description.href && (
																<Link
																	appearance="primary"
																	className={
																		styles.switchboard_link
																	}
																	href={description.href}
																	target="_blank">
																	{description.text}
																</Link>
															)}

														{description.type ===
															Description.WARNING && (
															<Paragraph
																className={
																	styles.switchboard_text_middle
																}
																appearance="warning"
																size="large">
																{description.text}
															</Paragraph>
														)}
													</React.Fragment>
												))}
											</div>
										))}
										<Countdown
											className={styles.switchboard_countdown}
											timerIsoEndEvent={promotion.timerIsoEndEvent}
										/>
									</div>
									<div className={styles.switchboard_item}>
										<Heading
											className={styles.switchboard_rang}
											appearance="secondary"
											tag="h2"
											size="extra">
											{promotion.rank}
										</Heading>
										<div className={styles.switchboard_leader}>
											{promotion.leaders.map((leader) => (
												<Link
													key={leader.id}
													className={styles.switchboard_leader_link}
													href={leader.href}
													appearance="secondary">
													{leader.leader}
												</Link>
											))}
										</div>
									</div>
								</FlexGrid>
							)),

							// <FlexGrid margin="medium" childrenFill={false}>
							// 	<div className={styles.switchboard_item}>
							// 		<div className={styles.description_block}>
							// 			<Paragraph
							// 				className={styles.switchboard_text}
							// 				appearance="secondary"
							// 				size="medium">
							// 				Прими участие в событии, получи пешку этого события и
							// 				верни себе
							// 			</Paragraph>
							// 			<Link
							// 				appearance="primary"
							// 				className={styles.switchboard_link}
							// 				href="https://market.vkplay.ru/shop/148"
							// 				target="_blank">
							// 				50 платины
							// 			</Link>
							// 		</div>

							// 		<div className={styles.description_block_middle}>
							// 			<Paragraph
							// 				className={styles.switchboard_text}
							// 				appearance="warning"
							// 				size="large">
							// 				Сделай три фото и отправь в
							// 			</Paragraph>
							// 			<Link
							// 				appearance="primary"
							// 				className={styles.switchboard_link}
							// 				href="https://t.me/+-mK_tFcigUZlN2My"
							// 				target="_blank">
							// 				Telegram chat
							// 			</Link>
							// 		</div>
							// 		<div className={styles.description_block}>
							// 			<Paragraph
							// 				className={styles.switchboard_text}
							// 				appearance="secondary"
							// 				size="medium">
							// 				Первое фото - магазина до покупки пешки. Второе -
							// 				магазина после покупки. Третье - с пешкой в инвентаре
							// 			</Paragraph>
							// 		</div>

							// 		<Countdown
							// 			className={styles.switchboard_countdown}
							// 			timerIsoEndEvent="2023-04-24"
							// 		/>
							// 	</div>

							// 	<div className={styles.switchboard_item}>
							// 		<Heading
							// 			className={styles.switchboard_rang}
							// 			appearance="secondary"
							// 			tag="h2"
							// 			size="extra">
							// 			S
							// 		</Heading>
							// 		<div className={styles.switchboard_leader}>
							// 			<Link
							// 				className={styles.switchboard_leader_link}
							// 				href="#"
							// 				appearance="secondary">
							// 				Mudya
							// 			</Link>
							// 			<Link
							// 				className={styles.switchboard_leader_link}
							// 				href="#"
							// 				appearance="secondary">
							// 				Mudya
							// 			</Link>
							// 			<Link
							// 				className={styles.switchboard_leader_link}
							// 				href="#"
							// 				appearance="secondary">
							// 				Mudya
							// 			</Link>
							// 			<Link
							// 				className={styles.switchboard_leader_link}
							// 				href="#"
							// 				appearance="secondary">
							// 				Mudya
							// 			</Link>
							// 			<Link
							// 				className={styles.switchboard_leader_link}
							// 				href="#"
							// 				appearance="secondary">
							// 				Mudya
							// 			</Link>
							// 		</div>
							// 	</div>
							// </FlexGrid>,
						]}
					/>
				</div>
			</div>
		</>
	)
}

export { Chimera }
