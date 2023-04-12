import { type IFlexProps } from './Flex.props'
import styles from './Flex.module.css'
import classNames from 'classnames'

function Flex({ mode, wrap, type, spacing, children, className, ...props }: IFlexProps) {
	// const jsxStyles = {
	// 	stackContainer: {
	// 	  '> *': {
	// 		marginBottom: '8px',
	// 	  },
	// 	},
	//   };

	return (
		<div
			{...props}
			className={classNames(styles.type, className, {
				[styles.center]: mode === 'center',
				[styles.row]: type === 'row',
				[styles.column]: type === 'column',
				[styles.wrap]: wrap,
				// ==============
				[styles.mt_05]: spacing === 0.5,
				[styles.mt_1]: spacing === 1,
				[styles.mt_2]: spacing === 2,
				[styles.mt_3]: spacing === 3,
				[styles.mt_4]: spacing === 4,
				[styles.mt_5]: spacing === 5,
			})}>
			{children}
		</div>
	)
}

export { Flex }
