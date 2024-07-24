import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { Container } from './style'

import { treinoData } from '../../data'
import { useState } from 'react'

export function Tabela({ titulo }: { titulo: string }) {
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(!open)
  }
  return (
    <Container open={open}>
      <h2>
        Treino Semanal para {titulo}
        <button onClick={handleOpen}>
          <ChevronDoubleDownIcon />
        </button>
      </h2>
      <div className="overflow-x">
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Exercícios</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Descanso</th>
            </tr>
          </thead>
          <tbody>
            {treinoData[titulo]?.map((dia) =>
              dia.exercicios.map((exercicio, index) => (
                <tr key={`${dia.dia}-${index}`}>
                  {index === 0 && (
                    <td rowSpan={dia.exercicios.length}>{dia.dia}</td>
                  )}
                  <td>{exercicio.nome}</td>
                  <td>{exercicio.series}</td>
                  <td>{exercicio.repeticoes}</td>
                  <td>{exercicio.descanso}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <div className="warning">
        <p>
          Aviso: Para melhores informações e orientações personalizadas,
          recomendamos entrar em contato com um profissional de educação física
          ou personal trainer.
        </p>
      </div>
    </Container>
  )
}
