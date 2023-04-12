import { type IParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'
import classNames from 'classnames'

function Paragraph({ appearance, size, className, children }: IParagraphProps) {
	return (
		<p
			className={classNames(className, {
				[styles.primary]: appearance === 'primary',
				[styles.secondary]: appearance === 'secondary',
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
			})}>
			{children}
		</p>
	)
}

export { Paragraph }
