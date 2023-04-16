import type { ISwitchboardProps } from './Switchboard.props'

function Switchboard({ content, id }: ISwitchboardProps) {
	return content[id - 1]
}

export { Switchboard }
