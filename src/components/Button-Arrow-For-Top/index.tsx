import { useEffect, useState } from 'react'
import imagePathArrow from '../../assets/arrow.png'
import { Circle, Container } from './style'

const SCROLL_THRESHOLD = 200

export function ButtonArrowForTop() {
  const [showButton, setShowButton] = useState(false)
  const [strokeDashValue, setStrokeDashValue] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      const scrollPercent =
        scrollY / (document.documentElement.scrollHeight - window.innerHeight)

      const newStrokeDashValue = Math.min(scrollPercent * 251, 251)
      setStrokeDashValue(newStrokeDashValue)
      setShowButton(scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container showButton={showButton} onClick={scrollToTop}>
      <svg viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          strokeDashValue={strokeDashValue}
        ></Circle>
      </svg>
      <img src={imagePathArrow} alt="Arrow For Top" />
    </Container>
  )
}
