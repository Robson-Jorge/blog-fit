import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    gap: 20px;
    padding: 40px;
    font-size: 18px;
    letter-spacing: 1px;
  }

  img {
    width: 40%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;

    div {
      order: 2;
      width: 100%;
      padding: 20px 5px;

      h1 {
        text-align: center;
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`
