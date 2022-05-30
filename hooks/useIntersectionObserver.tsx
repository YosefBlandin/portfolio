import { useState, useEffect, MutableRefObject } from 'react'

interface iUseIntersectionObserverParams {
  options: {
    root: HTMLElement | null
    rootMargin: string
    threshold: number
  }
  target: MutableRefObject<null>
}

export const useIntersectionObserver = ({
  options,
  target
}: iUseIntersectionObserverParams) => {
  const [entries, setEntries] = useState({})

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => setEntries(entry))
  }, options)

  useEffect(
    function currentElWatch () {
      const targetCurrent = target.current
      if (targetCurrent) {
        observer.observe(targetCurrent)
      }
      return () => {
        if (targetCurrent) observer.unobserve(targetCurrent)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return entries
}
