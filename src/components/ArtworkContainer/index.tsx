import { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
  children: ReactNode;
}

export default function ArtworkContainer({
  children
}: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}