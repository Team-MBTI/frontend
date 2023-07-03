import { RefObject, useEffect, useState } from 'react';

interface IUseMbtiTest {
  currentStep: number;
  moveToNextQuestion: (index: number) => void;
}

export const useMbtiTest = (
  questionRef: RefObject<HTMLDivElement[]>,
): IUseMbtiTest => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const moveToNextQuestion = (index: number) => {
    if (questionRef.current === null) return;

    questionRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    setCurrentStep(index);
  };

  return { currentStep, moveToNextQuestion };
};
