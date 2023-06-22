import classNames from 'classnames'
import { ILinkProps } from './Link.interface'
import styles from './Link.module.css'

function Link({ href, children, appearance, className, ...props }: ILinkProps) {
	return (
		<a
			{...props}
			className={classNames(styles.link, className, {
				[styles.link_primary]: appearance === 'primary',
				[styles.link_secondary]: appearance === 'secondary',
			})}
			onClick={(event) =>
				href === '' && alert('Упс, мы не смогли найти страницу пользователя.')
			}
			href={href}>
			{children}
		</a>
	)
}
export { Link }
