import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface CountdownProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	timerIsoEndEvent: string
	children?: ReactNode
}
