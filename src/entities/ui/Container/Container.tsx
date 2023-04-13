import { type IContainerProps } from './Container.props'
import styles from './Container.module.css'
import classNames from 'classnames'

function Container({ size, mode, children, className, ...props }: IContainerProps) {
	return (
		<div
			{...props}
			className={classNames(styles.container, className, {
				[styles.small]: size === 'small',
				[styles.round]: mode === 'round',
			})}>
			{children}
		</div>
	)
}

export { Container }
