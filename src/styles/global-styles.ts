import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    -webkit-font-smoothing: antialiased;
  }

  /* body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  } */

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  /* button:hover, a:hover {
    filter: brightness(0.9);
  } */


  //! Scrollbar optional
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  /* * {
    scrollbar-width: auto;
    scrollbar-color: #999591 transparent;
  } */

  /* Chrome, Edge, and Safari */
  /* *::-webkit-scrollbar {
    width: 16px;
  } */

  /* *::-webkit-scrollbar-track {
    background: transparent;
  } */

  /* *::-webkit-scrollbar-thumb {
    background-color: #999591;
    border-radius: 10px;
    border: 3px solid #ffffff;
  } */
`
