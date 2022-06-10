import { useEffect, useState } from "react"

export default function useProgressObserver(refName) {
  const [refWidth, setRefWidth] = useState(10)
  const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setRefWidth(Math.round(entries[0].intersectionRatio * 100))
    }
  }
  const observerOptions = {
    rootMargin: "5000% 0px 0px 0px",
    threshold: [0.1, 0.2, 0.4, 0.6, 0.8, 1],
  }
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(refName.current)
  })
  return refWidth
}
