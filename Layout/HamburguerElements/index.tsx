import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./styles.module.css";

interface iProps {
  data: Array<{ name: string; route: string; icon: FC; download: boolean }>;
  showSidebar: boolean;
}

export const HamburguerElements: FC<iProps> = ({ data, showSidebar }) => {
  const history = useRouter();
  return (
    <ul
      className={
        showSidebar
          ? `${styles.hamburguerElementsContainer} ${styles.active}`
          : `${styles.hamburguerElementsContainer} ${styles.deactivated}`
      }
    >
      {data.map((element, key) => (
        <>
          {element.download === false ? (
            <Link key={element.name} href={element.route} passHref>
              <a className={styles.hamburguerElement}>
                <span
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 5,
                    right: 0,
                    bottom: 0,
                    borderRadius: "0px 5px 5px 0",
                    borderLeft: history.pathname.includes(element.route)
                      ? `4px solid #E8DCB9`
                      : "4px solid #000",
                  }}
                ></span>
                {element.icon}
                <li>{element.name}</li>
              </a>
            </Link>
          ) : (
            <a
              className={styles.hamburguerElement}
              download={element.download}
              key={element.name}
              href={element.route}
            >
              <span
                style={{
                  display: "inline-block",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 5,
                  right: 0,
                  bottom: 0,
                  borderRadius: "0px 5px 5px 0",
                  borderLeft: history.pathname.includes(element.route)
                    ? `4px solid #E8DCB9`
                    : "4px solid #000",
                }}
              ></span>
              {element.icon}
              <li>{element.name}</li>
            </a>
          )}
        </>
      ))}
    </ul>
  );
};
