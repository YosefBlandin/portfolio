import { FC } from 'react'
import styles from './styles.module.css'

export const CardInfo: FC<{title: string, description: string, src:string}> = ({ title, description, src }) => {
	return (
		<article className={styles.cardInfo} key={title}>
						<img src={src} alt={title} />
						<div>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
					</article>
	)
}