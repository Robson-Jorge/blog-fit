import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 40px;
  background-color: #f0e7e2;
  max-width: 600px;
  margin: 50px auto;
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: max-content;
    padding: 8px 8px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
    color: #fff;
    box-shadow: 0 0 5px 1px #00000089;
    cursor: pointer;
  }

  h1 {
    font-size: 40px;
    padding: 20px;
    text-decoration: underline;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }
  h2 {
    margin: 15px 0;
  }

  @media (max-width: 768px) {
    padding: 25px;

    img {
      height: 250px;
    }

    h1 {
      font-size: 30px;
      text-align: center;
    }

    h2 {
      font-size: 20px;
      text-align: center;
    }
  }
`
export const ContainerInfo = styled.div`
  margin: 25px 0;
  background-color: #decfc7;
  padding: 10px;
  box-shadow: 0 0 5px 1px #00000089;
  border-radius: 5px;
  width: 100%;

  p {
    line-height: 1.4;
  }
`
