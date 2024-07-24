import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 40px;
  bottom: 40px;
  border-radius: 8px;
  z-index: 9999;

  img {
    cursor: pointer;
    width: 50px;
    margin-right: 8px;
    box-shadow: 0 0 5px 4px #000;
    padding: 3px;
    border-start-start-radius: 40%;
    border-start-end-radius: 40%;
    border-end-end-radius: 40%;
  }

  p {
    visibility: hidden;
    opacity: 0;
    background-color: #ffffffcc;
    padding: 4px 10px;
    border-radius: 5px;
    font-size: 18px;
    transition: 0.4s ease-in-out;
  }

  &:hover p {
    visibility: visible;
    opacity: 1;
  }
`
