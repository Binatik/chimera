import { v4 as uui } from 'uuid'

export enum Description {
	TEXT = 'text',
	LINK = 'link',
	WARNING = 'warning',
}

export const promotions = [
	{
		id: uui().split('-')[0],
		title: 'Охота за легендарной пешкой.',
		rank: 'D',
		timerIsoEndEvent: '2023-04-25',
		blocks: [
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: 'Улучше одну легендарную пешку и получи',
					},
					{
						id: uui().split('-')[0],
						type: Description.LINK,
						href: 'https://market.vkplay.ru/shop/148',
						text: '30 алмазов',
					},
				],
			},
		],
		leaders: [],
	},
	{
		id: uui().split('-')[0],
		title: 'Cкоростя на максимум.',
		rank: 'S',
		timerIsoEndEvent: '2023-05-07',
		blocks: [
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: `Участвуй в турнире и набери максимальное количество очков играя тапки как можно больше.`,
					},
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: `Двое самых быстрых участников будут награждены.`,
					},
				],
			},
		],
		leaders: [
			{
				id: uui().split('-')[0],
				leader: 'Mudya',
				href: '',
			},
			{
				id: uui().split('-')[0],
				leader: 'Every',
				href: '',
			},
		],
	},
	{
		id: uui().split('-')[0],
		title: 'Время в спять.',
		rank: 'D',
		timerIsoEndEvent: '2023-05-19',
		blocks: [
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: 'Прими участие в событии, получи пешку этого события и верни себе',
					},
					{
						id: uui().split('-')[0],
						type: Description.LINK,
						href: 'https://market.vkplay.ru/shop/148',
						text: '50 платины',
					},
				],
			},
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.WARNING,
						text: 'Сделай три фото и отправь в',
					},
					{
						id: uui().split('-')[0],
						type: Description.LINK,
						href: 'https://t.me/+-mK_tFcigUZlN2My',
						text: 'Telegram chat',
					},
				],
			},
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: `Первое фото - магазина до покупки пешки. Второе -
                        магазина после покупки. Третье - с пешкой в инвентаре`,
					},
				],
			},
		],
		leaders: [
			{
				id: uui().split('-')[0],
				leader: 'MrCmerte',
				href: '',
			},
			{
				id: uui().split('-')[0],
				leader: 'Player60161283',
				href: '',
			},
			{
				id: uui().split('-')[0],
				leader: 'Mudya',
				href: '',
			},
			{
				id: uui().split('-')[0],
				leader: 'Бу!бновыйБунт@рь',
				href: '',
			},
		],
	},

	{
		id: uui().split('-')[0],
		title: 'Охота за легендарной пешкой.',
		rank: 'D',
		timerIsoEndEvent: '2023-06-25',
		blocks: [
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: 'Прими участие в событии, получи пешку этого события и верни себе',
					},
					{
						id: uui().split('-')[0],
						type: Description.LINK,
						href: 'https://market.vkplay.ru/shop/148',
						text: '50 платины',
					},
				],
			},
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.WARNING,
						text: 'Сделай три фото и отправь в',
					},
					{
						id: uui().split('-')[0],
						type: Description.LINK,
						href: 'https://t.me/+-mK_tFcigUZlN2My',
						text: 'Telegram chat',
					},
				],
			},
			{
				id: uui().split('-')[0],
				descriptions: [
					{
						id: uui().split('-')[0],
						type: Description.TEXT,
						text: `Первое фото - магазина до покупки пешки. Второе -
                        магазина после покупки. Третье - с пешкой в инвентаре`,
					},
				],
			},
		],
		leaders: [],
	},
]

export type promotionsModel = typeof promotions
