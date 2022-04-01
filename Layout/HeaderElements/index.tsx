import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./styles.module.css";

interface iProps {
  data: Array<{ name: string; route: string; icon: FC }>;
}

export const HeaderElements: FC<iProps> = ({ data }) => {
  const history = useRouter();
  return (
    <ul className={styles.headerElementsList}>
      {data.map((element, key) => (
        <Link key={key} href={element.route} passHref>
          <a className={styles.headerElement}>
            {element.icon}
            <li>{element.name}</li>
          </a>
        </Link>
      ))}
    </ul>
  );
};
