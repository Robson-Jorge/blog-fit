import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PRIMARY};
  padding: 20px;
  width: 60%;
  /* height: 300px; */
  margin: 50px auto;
  /* border-top: 2px solid #000; */
  border-radius: 5px;

  .image-container {
    width: 300px;
    height: 210px;
    overflow: hidden;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 80%;
    .image-container {
      width: 100%;
    }
  }

  img {
    margin-right: 20px;
    width: 300px;
    height: 210px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px #00000089;
    transition: 0.4s ease-in-out;
    filter: blur(0.5px);
  }

  img:hover {
    transform: scale(1.08);
    filter: blur(0);
  }

  .content {
    /* display: flex; */
    /* flex-direction: column;
  align-items: center;
  justify-content: center; */
    padding: 10px;
    margin: 25px;
  }

  .content h3 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #000000;
    transition: 0.2s ease-in-out;
  }

  .content h3:hover {
    color: ${({ theme }) => theme.COLORS.EXTRA};
  }

  .content p {
    max-width: 500px;
    margin-bottom: 10px;
    color: #000000;
  }

  .content a {
    display: block;
    width: 100%;
    margin-top: 10px;
    /* color: #0064b7;
    text-decoration: underline; */
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .content {
      padding: 0;
      margin: 10px;
    }
    .content h3 {
      font-size: 23px;
      text-align: center;
    }
  }
`
