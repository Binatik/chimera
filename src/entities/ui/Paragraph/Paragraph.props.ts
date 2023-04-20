import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	appearance: 'primary' | 'secondary' | 'none'
	size: 'small' | 'medium'
	children: ReactNode
}
