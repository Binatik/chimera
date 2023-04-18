import { FlexGrid, Heading, Paragraph } from '../../entities/ui'
import chimera from '../../assets/chimera.png'
import type { ITab } from '../../app/types'
import { Tabs } from '../../widget/components'
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
				<Heading tag="h1">Chimera</Heading>
				<Paragraph size="small" appearance="secondary">
					596597
				</Paragraph>
			</div>
			<section className={classNames(styles.tabbed_container)}>
				<div className={classNames(styles.tabbed_menu)}>
					<Tabs
						className={styles.tabbed_item}
						appearance="primary"
						tabId={tabIdMenu}
						tabList={tabList}
						setTabId={setTabIdMenu}
					/>
				</div>
			</section>
			<div className={classNames(styles.tabbed_container)}>
				<div className={classNames(styles.tabbed_content)}>
					<Switchboard
						id={tabIdMenu}
						content={[
							<Paragraph size="medium" appearance="primary">
								Улучши одну легендарную пешку на один уровень один раз и получи 30
								алмазов.
							</Paragraph>,
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
