import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

export const CarouselWords = () => {
  const textContainer = useRef(null)
  const [word, setWord] = useState('Treating your page like a piece of art')
  const [nextText, setNextText] = useState(false)
  const [count, setCount] = useState(1)
  const changeText = () => {
    
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(count)
  //     if(count === 0) {
  //       setWord('Treating your page like a piece of art')
  //       setCount(1)
  //     } else if (count === 1) {
  //       setWord('Treating your project with accountability')
  //       setCount(2)
  //     } else if (count === 2) {
  //       setWord('Making your ideas in reality with good methodologies')
  //       setCount(0)
  //     }
  //   }, 6000)
  //   return () => clearInterval(interval)

  // }, [count])
 
  return (
    <div>
      <h2 className={styles.title}>{word}</h2>
    </div>
  )
}