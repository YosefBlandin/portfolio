import Link from 'next/link'
import { CSSProperties, FC } from 'react'
import styles from './styles.module.css'

export const ProjectElement: FC<{
  projectName: string
  projectCategory: string
  backgroundColor: string
  backgroundImage: string
  route: string
  style?: CSSProperties
}> = ({
  projectName,
  projectCategory,
  backgroundColor,
  backgroundImage,
  route,
  style
}) => {
  return (
    <Link href={route} passHref>
      <article
        style={{
          ...style,
          backgroundColor: backgroundColor
        }}
        className={styles.projectElementContainer}
      >
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
          className={styles.projectElementBackground}
        ></div>
        <div className={styles.projectElementText}>
          <h5>{projectName}</h5>
          <p>Category: {projectCategory}</p>
        </div>
      </article>
    </Link>
  )
}
