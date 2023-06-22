import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface PaperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'primary' | 'secondary' | 'blocked' | 'light'
	children: ReactNode
	isCenterContent?: boolean
}
