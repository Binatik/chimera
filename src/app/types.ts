export interface ISettingsRound {
	isRoundChildren: boolean
	round: 'medium'
}

export interface ITab {
	id: number
	title: string
	picture?: string
}

export interface IStock {
	id: number
	title: string
	description: string
	type: 'D' | 'B' | 'S' | 'S+'
	victorsList: Array<string>
	timerIsoEndEvent: string
}
