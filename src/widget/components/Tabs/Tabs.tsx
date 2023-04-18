import { useState } from 'react'
import { Button, FlexGrid } from '../../../entities/ui'
import { type ITabsProps } from './Tabs.props'

function Tabs({ tabList, tabId, className, setTabId, ...props }: ITabsProps) {
	function toggleTab(toggleTabId: number) {
		if (toggleTabId === tabId) return
		setTabId(toggleTabId)
	}
	return (
		<>
			<FlexGrid className={className} columnCount={tabList.length} childrenFill={false}>
				{tabList.map((tab, index) => (
					<Button
						{...props}
						disabled={index + 1 == tabId}
						key={tab.id}
						onClick={() => toggleTab(index + 1)}>
						{tab.title}
					</Button>
				))}
			</FlexGrid>
		</>
	)
}

export { Tabs }
