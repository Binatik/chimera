import { FlexGrid, Heading, Paper, Paragraph } from '../../entities/ui'
import chimera from '../../assets/chimera.png'
import type { ITab } from '../../app/types'
import { Tabs } from '../../widget/components'
import { useState } from 'react'
import { Copy, Countdown, Switchboard } from '../../features/components'
import classNames from 'classnames'
import styles from './Chimera.module.css'
import { Link } from '../../entities/ui/Link/Link'
import React from 'react'
import { Description, promotions } from '../../app/models/promotions'
import { modules } from '../../app/models/rules'

const tabList: ITab[] = [
	{ id: 1, title: 'Акции', picture: 'picture1.png' },
	{ id: 2, title: 'Правила', picture: 'picture2.png' },
]

const clanId = '596597'

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
					{clanId}
				</Paragraph>
				<Copy
					message={clanId}
					answer="Вы скопировали ID клана. Его необходимо вставить в самой игре когда ищите клан."
				/>
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
				<Switchboard
					id={tabIdMenu}
					content={[
						reversePromotions.map((promotion) => (
							<FlexGrid key={promotion.id} margin="medium" childrenFill={false}>
								<div
									className={classNames(
										styles.switchboard_item,
										styles.switchboard_item__top
									)}>
									<Heading appearance="primary" size="medium" tag="h2">
										{promotion.title}
									</Heading>

									{promotion.blocks.map((block) => (
										<div key={block.id} className={styles.description_block}>
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
																className={styles.switchboard_link}
																href={description.href}
																target="_blank">
																{description.text}
															</Link>
														)}

													{description.type === Description.WARNING && (
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
						modules.map((module) => (
							<React.Fragment key={module.id}>
								<Heading
									appearance="primary"
									size="medium"
									tag="h2"
									className={styles.rule_title}>
									{module.title}
								</Heading>
								{module.rules.map((rule) => (
									<Paper
										className={styles.rule_content}
										key={rule.id}
										appearance="light">
										<Paragraph appearance="secondary" size="large">
											{rule.description}
										</Paragraph>

										{rule.warn && (
											<Paragraph appearance="warning" size="large">
												{rule.warn}
											</Paragraph>
										)}
									</Paper>
								))}
							</React.Fragment>
						)),
					]}
				/>
			</div>
		</>
	)
}

export { Chimera }
