import { useRouter } from "next/router";
import { FC, ReactNode, useState } from "react";
import { SiCoderwall, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { HamburguerElements } from "./HamburguerElements";
import { hamburguerElements } from "./HamburguerElements/data";
import { HeaderElements } from "./HeaderElements";
import styles from "./styles.module.css";

export const Layout: FC<ReactNode> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <p className={styles.headerLogo} onClick={() => router.push("/")}>
          Yosef <span>Blandin</span>
        </p>
        <SiCoderwall
          className={
            showSidebar
              ? `${styles.headerHamburguer} ${styles.headerHamburguerActive}`
              : `${styles.headerHamburguer}`
          }
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <HamburguerElements
          data={hamburguerElements}
          showSidebar={showSidebar}
        />
        <HeaderElements data={hamburguerElements} />
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Best regards</p>
        <p>Yosef Blandin All Rights Reserved</p>
        <div className={styles.footerContact}>
          <a
            href="https://www.linkedin.com/in/yosef-blandin-a587241b0/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/YosefBlandin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGithub />
            <span>Github</span>
          </a>
          <a
            href="https://twitter.com/yosef_rios"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiTwitter />
            <span>Twitter</span>
          </a>
        </div>
      </footer>
    </>
  );
};
