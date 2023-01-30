import styles from './styles.module.scss'

export default function Loader() {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader}></div>
    </div>
  )
}
