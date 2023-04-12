import { type IHeadingProps } from './Heading.props'
import styles from './Heading.module.css'
import { exhaustivenessCheck } from '../../helpers/index'

function Heading({ tag, children }: IHeadingProps) {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>
		default:
			exhaustivenessCheck<IHeadingProps[typeof tag]>(tag)
	}
}

export { Heading }
