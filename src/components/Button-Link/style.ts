import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const LinkButton = styled(Link)<{ isEspecial: boolean }>`
  display: inline-block;
  font-size: 18px;
  color: #fff;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  border-radius: 8px;
  padding: 5px 15px;
  margin: 0 15px;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  }

  ${({ isEspecial }) =>
    isEspecial &&
    css`
      background-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
      box-shadow: 0 0 5px 2px ${({ theme }) => theme.COLORS.SECONDARY_900};
      animation: pulse 1s infinite alternate;
      transform: scale(1);
      opacity: 0;
    `}

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 5px 10px;
    margin: 0 7px;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`
