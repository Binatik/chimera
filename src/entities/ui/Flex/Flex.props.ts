import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IFlexProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	mode: 'center'
	type: 'row' | 'column'
	spacing?: 0.5 | 1 | 2 | 3 | 4 | 5
	children: ReactNode
	wrap?: boolean
}
