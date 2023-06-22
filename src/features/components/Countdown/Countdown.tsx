import { Paper, Paragraph } from '../../../entities/ui'
import { CountdownProps } from './Countdown.props'
import { useEffect, useState } from 'react'
import styles from './Countdown.module.css'
import classNames from 'classnames'

function Countdown({ timerIsoEndEvent, className }: CountdownProps) {
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

	const isTimer = data && data.hours > '0' && data.minutes > '0'

	useEffect(() => {
		timeUntilEventEnd()
	}, [])

	useEffect(() => {
		timerId = setInterval(timeUntilEventEnd, 60000)

		return () => clearInterval(timerId)
	}, [timeUntilEventEnd])

	return (
		<>
			{isTimer ? (
				<Paper className={classNames(styles.countdown, className)} appearance="secondary">
					<Paragraph appearance="white" size="medium">
						{data.hours}
					</Paragraph>
					<Paragraph
						appearance="white"
						size="medium">{`: ${data.minutes} - Минут`}</Paragraph>
				</Paper>
			) : (
				<Paper className={classNames(styles.countdown, className)} appearance="blocked">
					<Paragraph appearance="white" size="medium">
						Акция завершена!
					</Paragraph>
				</Paper>
			)}
		</>
	)
}

export { Countdown }
