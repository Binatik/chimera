import { type IButtonProps } from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'

function Button({ appearance, className, children, ...props }: IButtonProps) {
	return (
		<button
			{...props}
			type="button"
			className={classNames(styles.button, className, {
				[styles.primary]: appearance === 'primary',
			})}>
			{children}
		</button>
	)
}

export { Button }
