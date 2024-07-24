import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PRIMARY};
  color: #fff;
  padding-bottom: 40px;
`
