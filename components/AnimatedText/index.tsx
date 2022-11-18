import { FC, ReactNode, useState } from "react";
import styles from "./animatedText.module.css";

export const AnimatedText: FC<{
  mediumText: string | ReactNode;
}> = ({ mediumText }) => {
  const [bigTextNumber, setBigTextNumber] = useState(0);
  const incrementalNumber = () => {
    setTimeout(() => {
      if (bigTextNumber >= 38) {
        return clearTimeout();
      } else {
        setBigTextNumber(bigTextNumber + 1);
      }
    }, 20);
  };

  incrementalNumber();
  return (
    <section className={styles.animatedTextContainer}>
      <h2 className={styles.animatedTextContainer__bigText}>
        {bigTextNumber}%
      </h2>
      <p
        className={
          bigTextNumber === 38
            ? `${styles.animatedTextContainer__mediumText} ${styles.animatedTextContainer__mediumText__animation}`
            : styles.animatedTextContainer__mediumText
        }
      >
        {mediumText}
      </p>
      <p className={styles.animatedTextContainer__smallText}>
        In Airbnb, they found out that 38% of bugs could have been prevented by
        using TypeScript.
      </p>
    </section>
  );
};
