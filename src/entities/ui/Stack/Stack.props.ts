import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IStackProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	spacing: number
	children: ReactNode
}
