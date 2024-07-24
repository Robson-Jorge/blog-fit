import imagePathWhatsapp from '../../assets/icone-whatsApp.svg'
import { Container } from './style'

export function ButtonWhatsApp() {
  return (
    <Container>
      <img src={imagePathWhatsapp} alt="" />
      <p className="fale-conosco">Fale conosco</p>
    </Container>
  )
}
