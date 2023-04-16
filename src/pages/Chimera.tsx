import { Container, Flex, Heading, Paragraph } from '../entities/ui'
import chimera from '../assets/chimera.png'
import type { ITab } from '../app/types'
import { Tabs } from '../widget/components'
import { useState } from 'react'
import { Switchboard } from '../features/components'

const tabList: ITab[] = [
	{ id: 1, title: 'Акции', picture: 'picture1.png' },
	{ id: 2, title: 'Участники', picture: 'picture2.png' },
	{ id: 3, title: 'Критерии отбора', picture: 'picture2.png' },
]

function Chimera() {
	const [tabId1, setTabId1] = useState(1)
	const [tabId2, setTabId2] = useState(1)
	return (
		<>
			<Flex
				style={{
					borderBottom: '1px solid #efedf6',
					paddingBottom: '1rem',
					marginBottom: '1rem',
				}}
				position="center"
				orientation="column"
				spacing={0.5}>
				<img style={{ width: '100px' }} src={chimera} alt="chimera" />
				<Heading tag="h1">Chimera</Heading>
				<Paragraph size="small" appearance="secondary">
					596597
				</Paragraph>
			</Flex>
			<Flex position="center" orientation="column" spacing={3}>
				<Paragraph size="medium" appearance="primary">
					Мы только открыли клан, скоро все будет. Помоги создать легенду!
				</Paragraph>
			</Flex>
			<Container size="small">
				<Flex
					settingsRound={{ isRoundChildren: true, round: 'medium' }}
					spacing={3}
					position="center"
					orientation="column">
					<Flex
						isWrap={true}
						isStretch={true}
						style={{ backgroundColor: 'var(--primary-color)', padding: '0 1rem 5rem' }}
						position="center"
						orientation="row">
						<Tabs
							appearance="primary"
							tabId={tabId1}
							tabList={tabList}
							setTabId={setTabId1}
						/>
					</Flex>
				</Flex>
				<Paragraph size="medium" appearance="primary">
					Стили скоро появятся
				</Paragraph>

				<Switchboard
					id={tabId1}
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
			</Container>
		</>
	)
}

export { Chimera }
