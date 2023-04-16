import type { ITab } from '../../../app/types'

export interface ITabsProps {
	tabList: ITab[]
	appearance: 'primary'
	tabId: number
	setTabId: React.Dispatch<React.SetStateAction<number>>
}
