import type { FlexGridProps } from './FlexGrid.props'
import styles from './FlexGrid.module.css'
import classNames from 'classnames'
import React, { ReactNode } from 'react'

function FlexGrid({ className, childrenFill, margin, children }: FlexGridProps) {
	const childrenCount = React.Children.count(children)

	const columns: Array<ReactNode[]> = []
	for (let i = 0; i < childrenCount; i++) {
		columns.push([])
	}

	{
		React.Children.forEach(children, (child: ReactNode, index: number) => {
			columns[index % childrenCount].push(child)
		})
	}

	return (
		<div className={classNames(styles.wrapper)}>
			{columns.map((col, index) => (
				<div
					className={classNames(styles.column, className, {
						[styles.children_fill]: childrenFill,
						[styles.column_margin]: margin === 'medium',
						[styles.column_auto]: childrenCount === 1,
						[styles.column_2]: childrenCount === 2,
						[styles.column_3]: childrenCount === 3,
						[styles.column_4]: childrenCount === 4,
					})}
					key={index}>
					{col}
				</div>
			))}
		</div>
	)
}

export { FlexGrid }
