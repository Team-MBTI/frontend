import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

interface IProgress {
  currentStep: number;
  color: string;
}

const ProgressBarWrapper = styled.div<IProgress>`
  ${flexbox({ jc: 'center' })};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  & > div {
    max-width: 390px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  & > div > div {
    height: 5px;
    background-color: ${(props) => props.color};
    transition: width 0.5s ease-in-out;
    width: ${(props) => props.currentStep}px;
  }
`;

const ProgressBar = ({
  currentStep,
  color,
}: {
  currentStep: number;
  color: string;
}) => {
  const progressPercentage = (currentStep / 12) * 100;
  const maxWidth = 390;
  const width = maxWidth * (progressPercentage / 100);
  return (
    <ProgressBarWrapper currentStep={width} color={color}>
      <div>
        <div />
      </div>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
