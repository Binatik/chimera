import { type IHeadingProps } from './Heading.props'
import styles from './Heading.module.css'
import { exhaustivenessCheck } from '../../helpers/index'
import classNames from 'classnames'

function Heading({ tag, size, children, ...props }: IHeadingProps) {
	switch (tag) {
		case 'h1':
			return (
				<h1
					{...props}
					className={classNames(styles.tag, {
						[styles.tag_small]: size === 'small',
						[styles.tag_small]: size === 'medium',
					})}>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2
					{...props}
					className={classNames(styles.tag, {
						[styles.tag_small]: size === 'small',
						[styles.tag_medium]: size === 'medium',
					})}>
					{children}
				</h2>
			)
		default:
			exhaustivenessCheck<IHeadingProps[typeof tag]>(tag)
	}
}

export { Heading }
