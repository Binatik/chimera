import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { ISettingsRound } from '../../../app/types'

export interface IContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size: 'small' | 'medium'
	children: ReactNode
	settingsRound?: ISettingsRound
}
