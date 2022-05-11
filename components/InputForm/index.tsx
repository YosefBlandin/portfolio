import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface iLabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export const InputForm: FC<{
  labelProps: iLabelProps;
  inputProps: HTMLAttributes<HTMLInputElement>;
  labelTitle: string;
}> = ({ labelProps, inputProps, labelTitle }) => {
  return (
    <div className={styles.inputFormContainer}>
      <label {...labelProps}>{labelTitle}</label>
      <input {...inputProps} />
    </div>
  );
};
