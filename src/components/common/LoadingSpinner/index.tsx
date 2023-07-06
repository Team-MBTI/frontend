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

const Box = styled.div<{ imageUrl: string }>`
  width: 240px;
  height: 240px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 100% 100%;
  //여기서부터는 animation과 연관 있음
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 1;
  animation: ${move} 2s 1s infinite;
`;

const Loading = () => {
  return (
    <div className="App">
      <Box imageUrl="/images/logo.png" />
    </div>
  );
};

export default Loading;
