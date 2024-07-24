import styled from 'styled-components'

interface HeaderProps {
  backgroundColor?: boolean
}

export const Container = styled.header<HeaderProps>`
  width: 100%;
  height: 120px;
  background-color: #000;
  /* background-color: ${({ backgroundColor, theme }) =>
    backgroundColor
      ? theme.COLORS.BACKGROUND_HEADER_SECONDARY
      : theme.COLORS.BACKGROUND_HEADER_PRIMARY}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;

  img {
    width: 80px;
    height: 80px;
    margin: 0 20px 0 50px;
    filter: ${({ backgroundColor = false }) =>
      backgroundColor && 'invert(100%)'};
  }

  h1 {
    color: ${({ backgroundColor = false, theme }) =>
      backgroundColor && theme.COLORS.WHITE};
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 150px;
    padding: 15px 0;

    div {
      width: 100%;
      justify-content: center;
      margin-bottom: 8px;
    }

    img {
      width: 80px;
      height: 80px;
      margin: 0 20px;
    }
  }
`
