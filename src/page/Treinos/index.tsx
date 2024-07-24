import { ButtonArrowForTop } from '../../components/Button-Arrow-For-Top'
// import { ButtonWhatsApp } from '../../components/ButtonWhatsApp'
import { Header } from '../../components/Header'
import { Container } from './style'

import { Tabela } from './components/Tabela'

export function Treinos() {
  return (
    <Container>
      <Header bgColor />
      <div className="main-content">
        <h1>Seu Guia Completo de Treinos</h1>
        <div className="section-content">
          <h2 className="section-title">Introdução</h2>
          <p>
            Bem-vindo ao seu guia completo de treinos! Nesta página, você
            encontrará tudo o que precisa para iniciar e manter uma rotina de
            exercícios eficaz, independentemente do seu nível de experiência.
            Exploraremos diferentes tipos de treinos e forneceremos modelos
            específicos para mulheres e homens. Nosso objetivo é ajudá-lo a
            atingir seus objetivos de condicionamento físico de maneira segura e
            eficiente. Prepare-se para transformar seu corpo e sua saúde!
          </p>
        </div>
        <div className="section-content">
          <h2 className="section-title">Tipos de Treinos</h2>
          <h3>Treino de Força</h3>
          <p>
            O treino de força é essencial para construir músculos, aumentar a
            resistência e melhorar a saúde óssea. Este tipo de treino envolve o
            uso de pesos livres, máquinas de musculação, ou o próprio peso
            corporal para realizar exercícios que visam diferentes grupos
            musculares.
          </p>
          <h3>Treino Cardio</h3>
          <p>
            O treino cardiovascular é ideal para melhorar a saúde do coração,
            queimar calorias e aumentar a resistência. Atividades como correr,
            andar de bicicleta, nadar e aulas de aeróbica são excelentes opções
            de cardio.
          </p>
          <h3>Treino de Flexibilidade</h3>
          <p>
            O treino de flexibilidade ajuda a manter a amplitude de movimento
            das articulações e pode prevenir lesões. Yoga e alongamento são
            práticas comuns para melhorar a flexibilidade.
          </p>
          <h3>Treino HIIT (High-Intensity Interval Training)</h3>
          <p>
            O HIIT combina períodos curtos de exercícios intensos com períodos
            de recuperação. Este tipo de treino é ótimo para queimar gordura e
            melhorar a resistência cardiovascular em um curto período de tempo.
          </p>
        </div>
        <div className="section-content">
          <h2 className="section-title">Modelos de Treinos</h2>
          <div className="modelos-content">
            <h3>Modelos de Treinos para Mulheres</h3>
            <div className="listas">
              <h4>Treino de Força para Iniciantes</h4>
              <ul>
                <li>Agachamento: 3 séries de 12 repetições</li>
                <li>Levantamento Terra: 3 séries de 10 repetições</li>
                <li>Supino com Halteres: 3 séries de 12 repetições</li>
                <li>Remada Curvada com Halteres: 3 séries de 10 repetições</li>
                <li>Prancha: 3 séries de 30 segundos</li>
              </ul>
              <h4>Treino Cardio</h4>
              <ul>
                <li>Aquecimento: 5 minutos de caminhada rápida</li>
                <li>Corrida: 20 minutos em ritmo moderado</li>
                <li>Ciclismo: 15 minutos em ritmo moderado</li>
                <li>Resfriamento: 5 minutos de caminhada leve</li>
              </ul>
              <h4>Treino de Flexibilidade</h4>
              <ul>
                <li>
                  Alongamento de Quadríceps: 3 séries de 30 segundos para cada
                  perna
                </li>
                <li>
                  Alongamento de Isquiotibiais: 3 séries de 30 segundos para
                  cada perna
                </li>
                <li>Alongamento de Costas: 3 séries de 30 segundos</li>
              </ul>
            </div>
            <img
              src="https://blog.vhita.com.br/wp-content/uploads/2019/09/thinkstockphotos-636947536_opt-6-1.jpg"
              alt=""
            />
            <Tabela titulo="mulheres" />
          </div>
          <div className="modelos-content">
            <h3>Modelos de Treinos para Homens</h3>
            <div className="listas">
              <h4>Treino de Força para Iniciantes</h4>
              <ul>
                <li>Supino com Barra: 3 séries de 10 repetições</li>
                <li>Agachamento com Barra: 3 séries de 12 repetições</li>
                <li>Levantamento Terra: 3 séries de 8 repetições</li>
                <li>Desenvolvimento com Halteres: 3 séries de 10 repetições</li>
                <li>Flexão de Braço: 3 séries de 15 repetições</li>
              </ul>
              <h4>Treino Cardio</h4>
              <ul>
                <li>Aquecimento: 5 minutos de pular corda</li>
                <li>
                  Sprints: 10 séries de 30 segundos de corrida rápida, com 1
                  minuto de descanso
                </li>
                <li>Ciclismo de Alta Intensidade: 15 minutos</li>
              </ul>
              <h4>Treino de Flexibilidade</h4>
              <ul>
                <li>
                  Alongamento de Ombros: 3 séries de 30 segundos para cada braço
                </li>
                <li>Alongamento de Peito: 3 séries de 30 segundos</li>
                <li>
                  Alongamento de Panturrilha: 3 séries de 30 segundos para cada
                  perna
                </li>
              </ul>
            </div>
            <img
              src="https://www.dicasdetreino.com.br/wp-content/uploads/2020/12/Guia-completo-Treino-AB-para-Ganho-de-Massa.jpg"
              alt=""
            />
            <Tabela titulo="homens" />
          </div>
        </div>
        <div className="section-content">
          <h2 className="section-title">Encerramento</h2>
          <p>
            Esperamos que este guia de treinos tenha fornecido as ferramentas e
            a motivação necessárias para você começar sua jornada de fitness.
            Lembre-se de que a consistência é a chave para o sucesso. Escute seu
            corpo, ajuste seus treinos conforme necessário e, mais importante,
            divirta-se no processo. Manter-se ativo não só melhora sua saúde
            física, mas também seu bem-estar mental. Vamos juntos nessa jornada
            rumo a uma vida mais saudável e ativa!
          </p>
        </div>
      </div>
      {/* <ButtonWhatsApp /> */}
      <ButtonArrowForTop />
      <footer>
        <p>&copy; 2024 - Desenvolvido por: Cyber Cafe Technology</p>
      </footer>
    </Container>
  )
}
