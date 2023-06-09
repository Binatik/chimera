import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface FlexGridProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	childrenFill: boolean
	margin: 'medium'
	children: ReactNode
}
