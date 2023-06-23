import styled from '@emotion/styled';

interface IProgress {
  currentStep: number;
}

const ProgressBarWrapper = styled.div<IProgress>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    max-width: 390px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  & > div > div {
    height: 5px;
    background-color: #5344aa;
    transition: width 0.5s ease-in-out;
    width: ${(props) => props.currentStep}px;
  }
`;

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  const progressPercentage = (currentStep / 12) * 100;
  const maxWidth = 390;
  const width = maxWidth * (progressPercentage / 100);
  return (
    <ProgressBarWrapper currentStep={width}>
      <div>
        <div />
      </div>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
