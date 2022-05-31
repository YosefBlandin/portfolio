import { useState, useEffect, MutableRefObject } from 'react'

interface iUseIntersectionObserverParams {
  options: {
    root: HTMLElement | null
    rootMargin: string
    threshold: number
  }
  target: MutableRefObject<null>
}

interface Bounds {
  readonly height: number
  readonly width: number
  readonly top: number
  readonly left: number
  readonly right: number
  readonly bottom: number
}

interface IntersectionObserverEntry {
  readonly time: number
  readonly rootBounds: Bounds
  readonly boundingClientRect: Bounds
  readonly intersectionRect: Bounds
  readonly intersectionRatio: number
  readonly target: Element
  readonly isIntersecting: boolean
  readonly isVisible: boolean
}

export const useIntersectionObserver = ({
  options,
  target
}: iUseIntersectionObserverParams) => {
  const [entries, setEntries] = useState<
    IntersectionObserverEntry | { isIntersecting: boolean }
  >()

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
