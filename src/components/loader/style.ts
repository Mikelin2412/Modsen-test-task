import styled from 'styled-components';

export const LoaderBody = styled.div`
  position: relative;
  top: 50%;
  align-self: center;
  margin-bottom: 50px;

  & > span {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #262626;
    animation: animate 4s infinite forwards ease-in-out;
  }

  & > span:nth-child(1) {
    background: #f17900;
    left: -24px;
    top: -24px;
    animation-delay: 0.5s;
  }
  & > span:nth-child(2) {
    background: #ffd4a8;
    left: 0px;
    top: -24px;
    animation-delay: 1s;
  }
  & > span:nth-child(4) {
    background: #f17900;
    left: -24px;
    top: 0px;
    animation-delay: 1.5s;
  }
  & > span:nth-child(3) {
    background: #ffd4a8;
    left: 0px;
    top: 0px;
    animation-delay: 2s;
  }

  @keyframes animate {
    0% {
      transform: rotateY(0deg);
    }
    20% {
      transform: rotateY(360deg);
    }
    40% {
      transform: rotateX(180deg);
    }
    60% {
      transform: rotateX(0deg);
    }
    80% {
      transform: rotateX(360deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
`;
