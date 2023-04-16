import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { ISettingsRound } from '../../../app/types'

export interface IFlexProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	position: 'center'
	orientation: 'row' | 'column'
	children: ReactNode
	settingsRound?: ISettingsRound
	spacing?: number
	isStretch?: boolean
	isWrap?: boolean
}
