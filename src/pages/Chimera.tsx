import { Flex, Heading } from '../entities/ui'
import chimera from '../assets/chimera.png'

function Chimera() {
	return (
		<>
			<Flex type="column" mode="center">
				<img style={{ width: '100px' }} src={chimera} alt="chimera" />
				<Heading tag="h1">Chimera</Heading>
				<p>Мы только открыли клан, скоро все будет. Помоги создать легенду!</p>
			</Flex>
		</>
	)
}

export { Chimera }
