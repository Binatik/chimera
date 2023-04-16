import { type IContainerProps } from './Container.props'
import styles from './Container.module.css'
import classNames from 'classnames'

function Container({ size, settingsRound, children, className, ...props }: IContainerProps) {
	return (
		<div
			{...props}
			className={classNames(styles.container, className, {
				[styles.container_small]: size === 'small',
				[styles.round]: settingsRound?.isRoundChildren,
				[styles.round_medium]: settingsRound?.round === 'medium',
			})}>
			{children}
		</div>
	)
}

export { Container }
