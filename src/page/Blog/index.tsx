import { Presentation } from './style'
import { receitas } from '../../data/receitas'
import { CardBlog } from '../../components/Card-Blog'
import { Footer } from '../../components/Footer'

export function Blog() {
  return (
    <>
      <Presentation>
        <div>
          <h1>Dicas e receitas fit para voce</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            obcaecati perspiciatis accusantium doloremque nostrum reprehenderit,
            aspernatur quibusdam labore aut vel. Repellat ex labore delectus
            aliquid fugiat nobis laborum hic sint!
          </p>
        </div>
        <img
          src="https://nutricamillabaffa.com.br/resources/img/nutricionista-camilla-baffa.jpg"
          alt=""
        />
      </Presentation>
      <section style={{ minHeight: '800px', width: '100%' }}>
        {receitas &&
          receitas.map((receita) => (
            <CardBlog receita={receita} key={receita.id} />
          ))}
      </section>
      <Footer />
    </>
  )
}
