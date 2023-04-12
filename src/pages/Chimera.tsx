import { Flex, Heading, Stack } from '../entities/ui'
import chimera from '../assets/chimera.png'
import { Paragraph } from '../entities/ui/Paragraph/Paragraph'

function Chimera() {
	return (
		<>
			<Flex
				style={{ borderBottom: '1px solid #efedf6' }}
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
		</>
	)
}

export { Chimera }
