import type { FlexGridProps } from './FlexGrid.props'
import styles from './FlexGrid.module.css'
import classNames from 'classnames'
import React, { ReactNode } from 'react'

function FlexGrid({ columnCount, className, childrenFill, children }: FlexGridProps) {
	const columns: Array<ReactNode[]> = []
	for (let i = 0; i < columnCount; i++) {
		columns.push([])
	}

	{
		React.Children.forEach(children, (child: ReactNode, index: number) => {
			columns[index % columnCount].push(child)
		})
	}

	return (
		<div className={classNames(styles.container)}>
			{columns.map((col, index) => (
				<div
					className={classNames(styles.column, className, {
						[styles.children_fill]: childrenFill,
						[styles.column_auto]: columnCount === 1,
						[styles.column_2]: columnCount === 2,
						[styles.column_3]: columnCount === 3,
						[styles.column_4]: columnCount === 4,
					})}
					key={index}>
					{col}
				</div>
			))}
		</div>
	)
}

export { FlexGrid }
