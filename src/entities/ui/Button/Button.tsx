import { type IButtonProps } from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'

function Button({ appearance, active, className, children, ...props }: IButtonProps) {
	return (
		<button
			{...props}
			type="button"
			className={classNames(styles.button, className, {
				[styles.button_primary]: appearance === 'primary',
				[styles.button_active]: active,
			})}>
			{children}
		</button>
	)
}

export { Button }
