import { type IFlexProps } from './Flex.props'
import styles from './Flex.module.css'
import classNames from 'classnames'

function Flex({
	position,
	settingsRound,
	isWrap,
	orientation,
	spacing,
	isStretch,
	children,
	className,
	...props
}: IFlexProps) {
	return (
		<div
			{...props}
			style={{ ...props.style, gap: `${spacing}rem` }}
			className={classNames(styles.flex, className, {
				[styles.position_center]: position === 'center',
				[styles.orientation_row]: orientation === 'row',
				[styles.orientation_column]: orientation === 'column',
				[styles.flex_wrap]: isWrap,
				[styles.stretch]: isStretch,
				[styles.round]: settingsRound?.isRoundChildren,
				[styles.round_medium]: settingsRound?.round === 'medium',
			})}>
			{children}
		</div>
	)
}

export { Flex }
