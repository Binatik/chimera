import { type IParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'
import classNames from 'classnames'

function Paragraph({ appearance, size, className, children }: IParagraphProps) {
	return (
		<p
			className={classNames(styles.paragraph, className, {
				[styles.paragraph_primary]: appearance === 'primary',
				[styles.paragraph_secondary]: appearance === 'secondary',
				[styles.paragraph_white]: appearance === 'white',
				[styles.paragraph_small]: size === 'small',
				[styles.paragraph_medium]: size === 'medium',
				[styles.paragraph_large]: size === 'large',
				[styles.paragraph_extra]: size === 'extra',
			})}>
			{children}
		</p>
	)
}

export { Paragraph }
