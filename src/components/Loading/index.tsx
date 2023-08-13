import LoadingIcon from '../icons/loading'
import styles from './index.module.css'

export default function Loading() {
  return (
    <main className={styles.main}>
      <LoadingIcon />
      <p>Loading data...</p>
    </main>
  )
}
