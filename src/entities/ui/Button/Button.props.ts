import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'secondary'
	isActive: boolean
	children: ReactNode
}
