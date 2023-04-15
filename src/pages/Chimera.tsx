import { Container, Flex, Heading, Paragraph } from '../entities/ui'
import chimera from '../assets/chimera.png'
import { type ITab } from '../widget/components/Tabs/Tabs.props'
import { Tabs } from '../widget/components'
import { useState } from 'react'

const tabs: ITab[] = [
	{ id: 1, title: 'Акции', picture: 'picture1.png' },
	{ id: 2, title: 'Участники', picture: 'picture2.png' },
	{ id: 3, title: 'Критерии отбора', picture: 'picture2.png' },
]

function Chimera() {
	const [tabId, setTabId] = useState(1)
	console.log(tabId)
	return (
		<>
			<Flex
				style={{
					borderBottom: '1px solid #efedf6',
					paddingBottom: '1rem',
					marginBottom: '1rem',
				}}
				mode="center"
				type="column"
				spacing={0.5}>
				<img style={{ width: '100px' }} src={chimera} alt="chimera" />
				<Heading tag="h1">Chimera</Heading>
				<Paragraph size="small" appearance="secondary">
					596597
				</Paragraph>
			</Flex>
			<Flex mode="center" type="column" spacing={3}>
				<Paragraph size="medium" appearance="primary">
					Мы только открыли клан, скоро все будет. Помоги создать легенду!
				</Paragraph>
			</Flex>
			<Container mode="round" size="small">
				<Flex
					style={{ backgroundColor: 'var(--primary-color)', paddingBottom: '1.5rem' }}
					mode="center"
					type="row">
					<Tabs tabId={tabId} appearance="primary" tabs={tabs} setTabId={setTabId} />
				</Flex>
			</Container>
		</>
	)
}

export { Chimera }
