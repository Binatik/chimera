export interface ITab {
	id: number
	title: string
	picture?: string
}

export interface ITabsProps {
	tabs: ITab[]
	appearance: 'primary'
	tabId: number
	setTabId: React.Dispatch<React.SetStateAction<number>>
}
