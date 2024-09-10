import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>2024 &copy; MoCSSA</p>
      <div>
        <a className={styles.links} href='https://github.com/marcobuontempo/mocssa/tree/main' target='_blank' rel='noreferrer'>GitHub</a>
        <a className={styles.links} href='https://github.com/marcobuontempo/mocssa/blob/main/CONTRIBUTING.md' target='_blank' rel='noreferrer'>Contribute</a>
      </div>
    </footer>
  )
}