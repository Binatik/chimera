import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	appearance: 'primary' | 'secondary' | 'white' | 'none'
	size: 'small' | 'medium' | 'large' | 'extra'
	children: ReactNode
}
