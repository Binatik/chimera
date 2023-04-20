import { Paragraph } from '../../../entities/ui'
import styles from './Countdown.module.css'
import { CountdownProps } from './Countdown.props'
import { useEffect, useState } from 'react'

function Countdown({ timerIsoEnd }: CountdownProps) {
	const [data, setData] = useState<null | { hours: number; minutes: number }>(null)
	let timerId: any = null

	function timeUntilEventEnd() {
		const currentTime = new Date().getTime()
		const endTime = new Date(timerIsoEnd).getTime()
		const diff = endTime - currentTime
		const hours = Math.floor(diff / (1000 * 60 * 60))
		const minutes = Math.floor((diff / (1000 * 60)) % 60)

		setData({
			hours,
			minutes,
		})
	}

	useEffect(() => {
		timeUntilEventEnd()
	}, [])

	useEffect(() => {
		timerId = setInterval(timeUntilEventEnd, 60000)

		return () => clearInterval(timerId)
	}, [timeUntilEventEnd])

	return (
		<div className={styles.countdown}>
			<Paragraph
				appearance="none"
				size="medium">{`${data?.hours}:${data?.minutes}`}</Paragraph>
			<Paragraph appearance="primary" size="medium">
				Осталось до конца акции
			</Paragraph>
		</div>
	)
}

export { Countdown }
