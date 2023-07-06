import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

import styled from '@emotion/styled';

interface Props {
  isActive?: boolean;
}

export const Section = styled.section`
  max-width: 390px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Question = styled.div<Props>`
  width: 100%;
  height: 100%;
  ${flexbox({ dir: 'column' })}
  gap: 16px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  & > p {
    text-align: center;
    color: ${(props) => (props.isActive ? 'black' : 'rgba(0,0,0,0.1)')};
  }

  & > div {
    ${flexbox({ jc: 'space-around' })}
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  ${flexbox({})};
  gap: 12px;
`;

export const Card = styled.button<Props>`
  width: 164px;
  height: 123px;
  padding: 10px;
  background-color: #fff;
  ${flexbox({ jc: 'space-around', ai: 'center' })}
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.isActive ? '#D9D8DC' : 'rgba(0,0,0,0.1)')};

  & > p {
    color: ${(props) => (props.isActive ? '#232323' : 'rgba(0,0,0,0.1)')};
  }

  &:focus {
    animation: ${(props) => (props.isActive ? 'blink 1s 1' : '')};
  }

  @keyframes blink {
    0%,
    20%,
    60%,
    100% {
      border: 2px solid ${theme.color.primary};
    }

    10%,
    30% {
      border: 2px solid #d9d8dc;
    }
  }
`;

export const ResultButton = styled.button`
  color: white;
  width: 100%;
  height: 40px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #5344aa;
`;

export const PreviousArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
`;

export const NextArea = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20vh;
`;
