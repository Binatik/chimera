import classNames from 'classnames'
import { Paragraph } from '../../../entities/ui'
import styles from './Countdown.module.css'
import { CountdownProps } from './Countdown.props'
import { useEffect, useState } from 'react'

function Countdown({ timerIsoEndEvent, children }: CountdownProps) {
	const [data, setData] = useState<null | { hours: string; minutes: string }>(null)
	let timerId: any = null

	function timeUntilEventEnd() {
		const currentTime = new Date().getTime()
		const endTime = new Date(timerIsoEndEvent).getTime()
		const diff = endTime - currentTime
		const hours = Math.floor(diff / (1000 * 60 * 60))
			.toString()
			.padStart(2, '0')
		const minutes = Math.floor((diff / (1000 * 60)) % 60)
			.toString()
			.padStart(2, '0')

		const timer = {
			hours,
			minutes,
		}

		setData(timer)
	}

	useEffect(() => {
		timeUntilEventEnd()
	}, [])

	useEffect(() => {
		timerId = setInterval(timeUntilEventEnd, 60000)

		return () => clearInterval(timerId)
	}, [timeUntilEventEnd])

	return data && data.hours > '0' && data.minutes > '0' ? (
		<>
			<div className={classNames(styles.countdown)}>
				<Paragraph appearance="white" size="large">
					{data?.hours}
				</Paragraph>
				<Paragraph
					appearance="white"
					size="medium">{`: ${data?.minutes} - Минут`}</Paragraph>
			</div>
			{children}
		</>
	) : (
		<Paragraph appearance="white" size="medium">
			Акция завершена!
		</Paragraph>
	)
}

export { Countdown }
