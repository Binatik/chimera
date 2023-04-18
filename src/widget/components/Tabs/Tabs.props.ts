import { DetailedHTMLProps, HTMLAttributes } from 'react'
import type { ITab } from '../../../app/types'

export interface ITabsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	tabList: ITab[]
	appearance: 'primary'
	tabId: number
	setTabId: React.Dispatch<React.SetStateAction<number>>
}
