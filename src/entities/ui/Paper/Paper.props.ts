import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface PaperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'primary' | 'secondary'
	children: ReactNode
	isCenterContent?: boolean
}
