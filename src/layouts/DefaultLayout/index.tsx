import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './style'
// import { Footer } from '../../components/Footer'
// import { ButtonWhatsApp } from '../../components/ButtonWhatsApp'
import { ButtonArrowForTop } from '../../components/Button-Arrow-For-Top'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header bgColor />
      <Outlet />
      {/* <ButtonWhatsApp /> */}
      <ButtonArrowForTop />
    </LayoutContainer>
  )
}
