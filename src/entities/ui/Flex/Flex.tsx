import { type IHeadingProps } from './Flex.props'
import styles from './Flex.module.css'
import classNames from 'classnames'

function Flex({ mode, wrap, type, children, className }: IHeadingProps) {
	return (
		<div
			className={classNames(styles.type, className, {
				[styles.center]: mode === 'center',
				[styles.row]: type === 'row',
				[styles.column]: type === 'column',
				[styles.wrap]: wrap,
			})}>
			{children}
		</div>
	)
}

export { Flex }
