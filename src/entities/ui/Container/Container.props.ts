import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	mode: 'round'
	size: 'small' | 'medium'
}
