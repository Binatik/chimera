import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	appearance: 'primary' | 'secondary' | 'white' | 'warning' | 'none'
	size: 'small' | 'medium' | 'large' | 'extra'
	children: ReactNode
}
