import { type IStackProps } from './Stack.props'
import styles from './Stack.module.css'
import classNames from 'classnames'

function Stack({ spacing, children, className }: IStackProps) {
	return (
		<div style={{ marginTop: `${spacing} px` }} className={classNames(className)}>
			{children}
		</div>
	)
}

export { Stack }
