import { FC, HTMLAttributes } from 'react'
import { TailSpin } from 'react-loader-spinner'
import styles from './styles.module.css'

interface iButton extends HTMLAttributes<HTMLButtonElement> {
  loading: boolean
  title: string
  color?: string
  icon?: string
}

export const Button: FC<iButton> = ({ loading, title, icon, color }, props) => {
  return (
    <button
      {...props}
      className={styles.button}
      style={{
        backgroundColor: color === 'black' ? '#000' : '#0070f3',
        boxShadow:
          color === 'black'
            ? '0 4px 14px 0 rgb(0 0 0 / 39%)'
            : '0 4px 14px 0 rgb(0 118 255 / 39%)'
      }}
    >
      {loading ? (
        <TailSpin color='rgb(255, 255, 255)' width={28} />
      ) : (
        <>
          {icon ? (
            <>
              {icon}
              {title}
            </>
          ) : (
            title
          )}
        </>
      )}
    </button>
  )
}
