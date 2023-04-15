import { useState } from 'react'
import { Button } from '../../../entities/ui'
import { type ITabsProps } from './Tabs.props'

function Tabs({ tabs, setTabId, tabId, ...props }: ITabsProps) {
	function toggleTab(toggleTabId: number) {
		if (toggleTabId === tabId) return
		setTabId(toggleTabId)
	}
	return (
		<>
			{tabs.map((tab, index) => (
				<Button
					{...props}
					active={index + 1 == tabId}
					key={tab.id}
					onClick={() => toggleTab(index + 1)}>
					{tab.title}
				</Button>
			))}
		</>
	)
}

export { Tabs }
