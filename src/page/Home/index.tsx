import { useState } from 'react'
import { slides } from '../../data/slide-home'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ButtonLink } from '../../components/Button-Link'
import { Header } from '../../components/Header'
// import { ButtonWhatsApp } from '../../components/ButtonWhatsApp'
import { Container, SlideCard, SlideContainer } from './style'

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  function handleNextSlide() {
    setCurrentSlide((currentSlide + 1) % slides.length)
  }

  function handlePreviousSlide() {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <Container>
      <Header bgColor />
      <ChevronLeftIcon onClick={handlePreviousSlide} />
      <ChevronRightIcon onClick={handleNextSlide} />
      <SlideContainer>
        <SlideCard visible>
          <img src={slides[currentSlide].img} alt="" />
          <div>
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].text}</p>
            <p>{slides[currentSlide].text2}</p>
            <ButtonLink to={slides[currentSlide].link}>
              {slides[currentSlide].contentButton}
            </ButtonLink>
          </div>
        </SlideCard>
      </SlideContainer>
      {/* <ButtonWhatsApp /> */}
    </Container>
  )
}
