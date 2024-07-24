import { Link } from 'react-router-dom'
import { Container } from './style'

export interface CardBlogProps {
  id: number
  nome: string
  ingredientes: string[]
  preparo: string[]
  dicas: string[]
  imagem: string
}

export function CardBlog({ receita }: { receita: CardBlogProps }) {
  const nomeUrl = receita.nome.replaceAll(' ', '-')

  return (
    <Container>
      <div className="image-container">
        <Link to={`/receita/${nomeUrl}`}>
          <img src={receita.imagem} alt="" />
        </Link>
      </div>
      <div className="content">
        <Link to={`/receita/${nomeUrl}`}>
          <h3>{receita.nome}</h3>
        </Link>
        <p>
          resumo do conteúdo do blog Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti minus sapiente voluptate beatae error iste
          rem totam eius qui itaque, obcaecati perferendis unde similique
          delectus dignissimos at, ratione, nobis tenetur?
        </p>
      </div>
    </Container>
  )
}
