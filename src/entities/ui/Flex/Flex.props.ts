import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IHeadingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	mode: 'center'
	type: 'row' | 'column'
	wrap?: boolean
	children: ReactNode
}
