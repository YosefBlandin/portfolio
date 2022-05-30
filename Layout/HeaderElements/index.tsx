import Link from 'next/link'
import { FC, ReactNode, StyleHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface iProps {
  data: Array<{ name: string; route: string; icon: ReactNode }>
  textColor: string
}

export const HeaderElements: FC<iProps> = ({ data, textColor }) => {
  return (
    <ul className={styles.headerElementsList}>
      {data.map((element, key) => (
        <Link key={key} href={element.route} passHref>
          <a className={styles.headerElement} style={{ color: textColor }}>
            {element.icon}
            <li>{element.name}</li>
          </a>
        </Link>
      ))}
    </ul>
  )
}
