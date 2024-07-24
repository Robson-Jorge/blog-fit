import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;

  svg {
    position: absolute;
    width: 36px;
    height: 52px;
    top: 50%;
    transform: translateY(50%);
    box-sizing: content-box;
    padding: 5px 0;
    background-color: #fefefe8c;
    transition: 0.3s ease-in-out;
    color: #000;
    cursor: pointer;
    z-index: 1;
    user-select: none;
  }

  svg:nth-child(2) {
    left: 15px;
  }

  svg:nth-child(3) {
    right: 15px;
  }

  svg:nth-child(2):hover {
    transform: translateY(50%) rotate3d(0, 1, 0, -25deg);
  }
  svg:nth-child(3):hover {
    transform: translateY(50%) rotate3d(0, 1, 0, 25deg);
  }

  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 40px;
    }
  }
`

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
  width: 100%;
  perspective: 1000px;
  overflow: hidden;
`

export const SlideCard = styled.div<{ visible: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: 1s ease-in-out;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }

  div {
    background: rgba(57, 57, 57, 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    text-align: center;
    color: #fff;
    position: absolute;
    top: 30%;
    left: 20%;
    padding: 20px;
    border-radius: 8px;
    width: 400px;

    a {
      background-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
      margin-top: 10px;
    }

    h1 {
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    div {
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
      top: 25%;
      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`
