import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const move = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    width: 600px;
    height: 600px;
    opacity: 0.5;
  }
  100% {
    width: 960px;
    height: 960px;
    opacity: 1;
  }
`;

const BoxWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div<{ imageUrl: string }>`
  width: 240px;
  height: 240px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 100% 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  animation: ${move} 2s 1s infinite;
`;

const LoadingSpinner = () => {
  return (
    <BoxWrapper>
      <Box imageUrl="/images/logo.png" />
    </BoxWrapper>
  );
};

export default LoadingSpinner;
