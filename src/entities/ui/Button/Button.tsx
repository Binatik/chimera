import { type IButtonProps } from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'

function Button({ appearance, className, isActive, children, ...props }: IButtonProps) {
	return (
		<button
			{...props}
			type="button"
			className={classNames(styles.button, className, {
				[styles.button_primary]: !isActive && appearance === 'primary',
				[styles.button_primary_active]: isActive,
			})}>
			{children}
		</button>
	)
}

export { Button }
