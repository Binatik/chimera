import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface FlexGridProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	columnCount: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | number
	childrenFill: boolean
	children: ReactNode
}
