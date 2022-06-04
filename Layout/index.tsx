import { m } from "framer-motion";
import { useRouter } from "next/router";
import { FC, ReactChild, useEffect, useRef, useState } from "react";
import { SiCoderwall, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { HamburguerElements } from "./HamburguerElements";
import { hamburguerElements } from "./HamburguerElements/data";
import { HeaderElements } from "./HeaderElements";
import styles from "./styles.module.css";

export default function Layout({
  children,
}: {
  children: ReactChild | ReactChild[];
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [headerClassName, setHeaderClassName] = useState(styles.header);
  const [headerFixedClassName, setHeaderFixedClassName] = useState(
    `${styles.headerFixed} ${styles.headerFixedHidden}`
  );
  const router = useRouter();
  const headerContainerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const headerObserverEntries = useIntersectionObserver({
    options,
    target: headerContainerRef,
  });
  useEffect(
    function headerAnimation() {
      if (headerObserverEntries?.isIntersecting === false) {
        setHeaderClassName(`${styles.header} ${styles.headerHidden}`);
        setHeaderFixedClassName(`${styles.headerFixed} ${styles.headerFixed}`);
      } else {
        setHeaderClassName(styles.header);
        setHeaderFixedClassName(
          `${styles.headerFixed} ${styles.headerFixedHidden}`
        );
      }
    },
    [headerObserverEntries]
  );
  return (
    <>
      <header className={headerClassName} ref={headerContainerRef}>
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
        <HeaderElements data={hamburguerElements} textColor="#000" />
      </header>
      <header className={headerFixedClassName}>
        <p className={styles.headerFixedLogo} onClick={() => router.push("/")}>
          Yosef
          <span> Blandin</span>
        </p>
        <SiCoderwall
          className={
            showSidebar
              ? `${styles.headerFixedHamburguer} ${styles.headerHamburguerActive}`
              : `${styles.headerFixedHamburguer}`
          }
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <HamburguerElements
          data={hamburguerElements}
          showSidebar={showSidebar}
        />
        <HeaderElements data={hamburguerElements} textColor="#fff" />
      </header>
      {children}
      <footer className={styles.footer}>
        <div>
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
              href="https://twitter.com/YosefBlandin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
