import { FC } from 'react'
import styles from './styles.module.css'

export const TitleSectionSplitter: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.titleSectionSplitterContainer}>
      <h2 className={styles.titleSectionSplitterTitle}> {title} </h2>
    </div>
  )
}
