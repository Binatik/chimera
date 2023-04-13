import { Button, Container, Flex, Heading, Paragraph } from '../entities/ui'
import chimera from '../assets/chimera.png'

function Chimera() {
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
					<Button
						onClick={() => alert('Мы работаем над этой вкладкой!')}
						appearance="primary">
						Акции
					</Button>
					<Button
						onClick={() => alert('Мы работаем над этой вкладкой!')}
						appearance="primary">
						Участники
					</Button>
					<Button
						onClick={() => alert('Мы работаем над этой вкладкой!')}
						appearance="primary">
						Критерии отбора
					</Button>
				</Flex>
			</Container>
		</>
	)
}

export { Chimera }
