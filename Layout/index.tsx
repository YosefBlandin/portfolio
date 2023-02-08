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
  showNav,
}: {
  children: ReactChild | ReactChild[];
  showNav?: boolean;
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [fadeUp, setFadeUp] = useState("");
  const [headerClassName, setHeaderClassName] = useState(styles.header);
  const [bgColor, setBgColor] = useState(styles.bgWhite);
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
        setIsIntersecting(false);
        setHeaderClassName(`${styles.header} ${styles.headerHidden}`);
        setHeaderFixedClassName(`${styles.headerFixed}`);
        setBgColor(`${styles.bgBlack}`);
        setFadeUp(`${styles.fadeUp}`);
      } else {
        setFadeUp("");
        setIsIntersecting(true);
        setHeaderClassName(styles.header);
        setHeaderFixedClassName(
          `${styles.headerFixed} ${styles.headerFixedHidden}`
        );
        setBgColor(`${styles.bgWhite}`);
      }
    },
    [headerObserverEntries]
  );
  return (
    <>
      <header className={headerClassName} ref={headerContainerRef}>
        <div className={styles.logoContainer}>
          <p className={styles.headerLogo} onClick={() => router.push("/")}>
            Yosef <span>Blandin</span>
          </p>
        </div>
        <nav
          className={`${styles.headerNav} ${
            !showNav && window.screen.width >= 768
              ? styles.fadeDown
              : styles.fadeUp
          }`}
        >
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
        </nav>
      </header>
      <header className={headerFixedClassName}>
        <div className={styles.logoContainer}>
          <p
            className={styles.headerFixedLogo}
            onClick={() => router.push("/")}
          >
            Yosef
            <span> Blandin</span>
          </p>
        </div>
        <nav
          className={`${styles.headerNav} ${
            !showNav && window.screen.width >= 768
              ? styles.fadeDown
              : styles.fadeUp
          }`}
        >
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

          <HeaderElements data={hamburguerElements} textColor="#000" />
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>
        <div>
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
          </div>
        </div>
      </footer>
    </>
  );
}
