import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IHeadingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: 'h1'
	children: ReactNode
}
