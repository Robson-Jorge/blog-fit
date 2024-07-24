import styled from 'styled-components'

export const Presentation = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: center; */
  height: 400px;
  width: 100%;

  div {
    margin-left: 15%;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 40px;
    color: #000000;
  }

  p {
    max-width: 500px;
    margin-bottom: 10px;
    color: #000000;
    font-size: 20px;
  }

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    div {
      margin-left: 20px;
    }

    img {
      object-position: right;
    }

    h1 {
      font-size: 30px;
      font-family: sans-serif;
      font-weight: bold;
      /* color: #fff; */
      /* text-shadow: 1px 1px 3px #fc8901; */
    }

    p {
      font-size: 16px;
      font-family: sans-serif;
      font-weight: bold;
      /* color: #fff; */
      /* text-shadow: 1px 1px 3px #fc8901; */
    }
  }
`
