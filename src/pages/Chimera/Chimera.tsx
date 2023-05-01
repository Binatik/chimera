import { FlexGrid, Heading, Paper, Paragraph } from '../../entities/ui'
import chimera from '../../assets/chimera.png'
import type { ITab } from '../../app/types'
import { Countdown, Tabs } from '../../widget/components'
import { useState } from 'react'
import { Switchboard } from '../../features/components'
import classNames from 'classnames'
import styles from './Chimera.module.css'

const tabList: ITab[] = [
	{ id: 1, title: 'Акции', picture: 'picture1.png' },
	{ id: 2, title: 'Участники', picture: 'picture2.png' },
	{ id: 3, title: 'Критерии отбора', picture: 'picture2.png' },
]

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
							<FlexGrid columnCount={2} childrenFill={true}>
								<div className={classNames(styles.content_item)}>
									<Heading size="medium" tag="h2">
										Cкоростя на максимум.
									</Heading>
									<Paragraph appearance="secondary" size="medium">
										Участвуй в турнире и набери максимальное количество очков,
										играя тапки как можно больше. Двое самых быстрых участников
										будут награждены.
									</Paragraph>
									<Paper appearance="secondary" isCenterContent>
										<Countdown timerIsoEndEvent={'2023-05-09'}>
											<br />
											<Paragraph size="medium" appearance="white">
												Осталось до конца акции.
											</Paragraph>
										</Countdown>
									</Paper>
								</div>
								<div
									className={classNames(styles.content_item, styles.center_item)}>
									<Paragraph size="extra" appearance="secondary">
										S
									</Paragraph>
								</div>
								<div className={classNames(styles.content_item)}>
									<Heading size="medium" tag="h2">
										Охота за легендарной пешкой.
									</Heading>
									<Paragraph appearance="secondary" size="medium">
										Улучше одну легендарную пешку и получи 30 алмазов.
									</Paragraph>
									<Paper appearance="secondary" isCenterContent>
										<Countdown timerIsoEndEvent={'2023-04-25'}>
											<br />
											<Paragraph size="medium" appearance="white">
												Осталось до конца акции.
											</Paragraph>
										</Countdown>
									</Paper>
								</div>
								<div
									className={classNames(styles.content_item, styles.center_item)}>
									<Paragraph size="extra" appearance="secondary">
										D
									</Paragraph>
								</div>
							</FlexGrid>,
							<Paragraph size="medium" appearance="primary">
								Участники скоро появятся
							</Paragraph>,
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
