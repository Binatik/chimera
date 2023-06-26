import { ReactComponent as CopySvg } from '../../../assets/copy.svg'
import { ICopy } from './Copy.interface'
import styles from './Copy.module.css'

function Copy({ message, answer }: ICopy) {
	function copyId() {
		navigator.clipboard.writeText(message)
		alert(answer)
	}

	return <CopySvg onClick={() => copyId()} className={styles.copy} />
}

export { Copy }
