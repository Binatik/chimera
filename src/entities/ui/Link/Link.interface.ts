import type { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from 'react'
export interface ILinkProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	href: string
	appearance: 'primary' | 'secondary'
	children: ReactNode
}
