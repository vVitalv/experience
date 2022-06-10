import { useEffect } from "react"

export default function useTextObserver(refs) {
  const isShown = refs.reduce((acc, ref) => {
    return { ...acc, [ref]: false }
  }, {})
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("text-yellow-200")
        entry.target.classList.add("-translate-y-10")
        isShown[entry.target.getAttribute("ref")] = true
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback)
    refs.forEach((ref) => observer.observe(ref.current))
    refs.forEach((ref) => {
      if (isShown[ref.current]) {
        return observer.unobserve(ref.current)
      }
      return null
    })
  })
}
