import classNames from 'classnames'
import styles from './Paper.module.css'
import { PaperProps } from './Paper.props'

function Paper({ appearance, className, isCenterContent, children }: PaperProps) {
	return (
		<div
			className={classNames(styles.paper, className, {
				[styles.center_content]: isCenterContent,
				[styles.paper_primary]: appearance === 'primary',
				[styles.paper_secondary]: appearance === 'secondary',
				[styles.paper_light]: appearance === 'light',
				[styles.paper_blocked]: appearance === 'blocked',
			})}>
			{children}
		</div>
	)
}

export { Paper }
