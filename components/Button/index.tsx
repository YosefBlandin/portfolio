import { FC, HTMLAttributes } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./styles.module.css";

interface iButton extends HTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  title: string;
  icon?: string;
}

export const Button: FC<iButton> = ({ loading, title, icon }, props) => {
  return (
    <button {...props} className={styles.button}>
      {loading ? (
        <TailSpin color="rgb(255, 255, 255)" width={28} />
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
  );
};
