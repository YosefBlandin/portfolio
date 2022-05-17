import { FC } from "react"
import Image from "next/image";
import styles from "./styles.module.css";
import videoPreview from '../../public/videoPreview.jpg'
import yosefImage from "../../public/profileCropped.jpg";

export const HomeAboutInfo: FC<{
  description: string;
}> = ({ description }) => {
  return (
    <div className={styles.homeAboutInfoContainer}>
			<div className={styles.homeAboutInfoContainerVideo}>
				<Image src={videoPreview} layout='responsive' alt='Yosef presentation' />
			</div>
			<article className={styles.homeAboutInfoContainerText}>
      <p className={styles.homeAboutInfoText}>&quot;{description}&quot;</p>
      <p className={styles.homeAboutInfoSmallText}>
        ~Yosef Enmanuel Blandin Rios
      </p>
    </article>
		</div>
  );
};
