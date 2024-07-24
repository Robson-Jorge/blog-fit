import Logo from '../../assets/Logo.png'
import { Container } from './style'
import { ButtonLink } from '../Button-Link'

interface HeaderProps {
  bgColor?: boolean
}

export function Header({ bgColor }: HeaderProps) {
  return (
    <Container backgroundColor={bgColor}>
      <div>
        <img src={Logo} alt="logo" />
        <h1>Corpo Blindado</h1>
      </div>

      <nav>
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/sobre">About</ButtonLink>
        <ButtonLink isEspecial to="/blog">
          Blog
        </ButtonLink>
        <ButtonLink to="/treinos">Treinos</ButtonLink>
      </nav>
    </Container>
  )
}
