import { useNavigate, useParams } from 'react-router-dom'
import { receitas } from '../../data/receitas'
import { Container, ContainerInfo } from './style'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

export function Receitas() {
  const { nome } = useParams()
  const navigate = useNavigate()

  function voltar() {
    navigate(-1)
  }

  const currentReceita = receitas.find(
    (receita) => receita.nome === nome?.replaceAll('-', ' '),
  )

  return (
    <>
      {currentReceita && (
        <Container>
          <button onClick={voltar}>
            <ArrowLeftCircleIcon width={24} />
          </button>
          <img src={currentReceita.imagem} alt="" />
          <h1>{currentReceita.nome}</h1>
          <div>
            <h2>ingredientes</h2>
            <ul>
              {currentReceita.ingredientes.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>
            <h2>preparo</h2>
            <ol>
              {currentReceita.preparo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <ContainerInfo>
              {currentReceita.dicas.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </ContainerInfo>
          </div>
        </Container>
      )}
    </>
  )
}
