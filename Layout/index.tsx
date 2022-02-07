import { FC, ReactNode } from "react"
import { SiCoderwall, SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si'
import styles from './styles.module.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.headerLogo}>Yosef Blandin</p>
        <SiCoderwall className={styles.headerHamburguer} />
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Best regards</p>
        <p>Yosef Blandin All Rights Reserved</p>
        <div className={styles.footerContact}>
          <a href='https://www.linkedin.com/in/yosef-blandin-a587241b0/' target='_blank' rel='noreferrer noopener'>
            <SiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href='https://github.com/YosefBlandin' target='_blank' rel='noreferrer noopener'>
            <SiGithub />
            <span>Github</span>
          </a>
          <a href='https://twitter.com/yosef_rios' target='_blank' rel='noreferrer noopener'>
            <SiTwitter />
            <span>Twitter</span>
          </a>
        </div>
      </footer>
    </>
  )
}