import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #000;
  color: #f4f4f4;

  .main-content {
    width: 70%;
    margin: 50px 0;
  }

  .main-content h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
  }

  .modelos-content {
    display: grid;
    grid-template-areas:
      'titulo titulo'
      'lista imagem'
      'tabela tabela';
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 768px) {
    .modelos-content {
      grid-template-areas:
        'titulo'
        'lista'
        'imagem'
        'tabela';
      grid-template-columns: 1fr;
    }
  }

  .modelos-content h3 {
    text-align: center;
    grid-area: titulo;
    font-size: 24px;
    margin: 25px 0;
  }

  .modelos-content .listas {
    grid-area: lista;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }

  .modelos-content img {
    grid-area: imagem;
    width: 100%;
    max-height: 800px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .section-content {
    margin-bottom: 20px;
  }

  .section-content h3 {
    margin: 25px 0;
  }

  footer {
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, #56c02178 20%, #000 100%);
    color: #000;
    padding-bottom: 20px;
  }
`
