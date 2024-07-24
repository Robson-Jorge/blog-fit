import styled from 'styled-components'

export const Container = styled.div<{ open: boolean }>`
  --rotate: ${({ open }) => (open ? '180deg' : '0')};

  grid-area: tabela;
  height: ${({ open }) => (open ? '100%' : '70px')};
  overflow: hidden;
  transition: 1s ease-in-out;

  table {
    width: 90%;
    border-collapse: collapse;
    margin: 20px auto;
    overflow: auto;
  }
  thead tr {
    color: #000;
  }
  table,
  th,
  td {
    border: 1px solid #ddd;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }

  h2 {
    text-align: center;
    margin: 20px auto;
    width: 90%;
    background-color: #ff9999;
    color: #000;
    padding: 10px;
    position: relative;
  }

  h2 button {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 30px;
    top: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    animation: upDown 1.5s infinite;
  }

  /* .overflow-x {
    overflow-x: scroll;
  } */

  @keyframes upDown {
    0% {
      transform: translateY(-55%) rotate(var(--rotate));
    }
    50% {
      transform: translateY(-5px) rotate(var(--rotate));
    }
    100% {
      transform: translateY(-55%) rotate(var(--rotate));
    }
  }

  .warning {
    background-color: #ffcccc;
    padding: 10px;
    box-shadow: 0px 0px 5px 2px #ff9999;
    margin-bottom: 20px;
    color: #000;
    margin: 0 5px 20px 5px;
  }
`
