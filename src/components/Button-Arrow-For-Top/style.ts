import styled from 'styled-components'

export const Container = styled.div<{ showButton: boolean }>`
  display: ${({ showButton }) => (showButton ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: max-content;
  background-color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px 3px
    ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PRIMARY};
  z-index: 9999;

  img {
    width: 80%;
    position: absolute;
  }

  svg {
    width: 50px;
    height: 50px;
    transform: rotate(-90deg);
  }
`

export const Circle = styled.circle<{ strokeDashValue: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_PRIMARY};
  stroke-width: 10;
  stroke-dasharray: ${({ strokeDashValue }) => strokeDashValue} 251;
`
