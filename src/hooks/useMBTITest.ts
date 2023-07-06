import { RefObject, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { getMbtiById, postMbti } from '@/apis/travel';
import { IMbtiResultContent, ITravelQuestion } from '@/interfaces/travel';
import { useToastMessage } from '@/store/GlobalStore';

import { useMutation, useQuery } from '@tanstack/react-query';

interface IQuestion {
  questionNumber: number;
  content: string;
  choiceOneContent: string;
  choiceOneScore: number;
  choiceTwoContent: string;
  choiceTwoScore: number;
}
interface IUseMbtiTest {
  currentStep: number;
  moveToNextQuestion: (
    index: number,
    questionNumber?: number,
    choiceNumber?: number,
  ) => void;
  mbtiQuestions: IQuestion[];
  handleQuestionsSubmit: () => void;
}

export const useMbtiTest = (
  questionRef: RefObject<HTMLDivElement[]>,
  testId: number,
): IUseMbtiTest => {
  const { data: mbtiQuestions } = useQuery(['mbtiTest'], () =>
    getMbtiById(testId),
  );
  const router = useRouter();

  const fetchPostMbti = useMutation(postMbti, {
    onSuccess: async (data: IMbtiResultContent) => {
      // data를 router 파라미터로 심기
      const {
        resultId,
        destinationName,
        destinationImgUrl,
        destinationContent,
        destinationContentImgUrl,
        mbti,
      } = data;
      router.push({
        pathname: '/result',
        query: {
          resultId,
          destinationName,
          destinationImgUrl,
          destinationContent,
          destinationContentImgUrl,
          mbti,
        },
      });
    },
    onError: (error: unknown) => {
      throw new Error(`error is ${error}`);
    },
  });

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answer, setAnswer] = useState<ITravelQuestion[]>([]);
  const setToastMessage = useToastMessage((state) => state.setToastMessage);

  const moveToNextQuestion = (
    index: number,
    questionNumber?: number,
    choiceNumber?: number,
  ) => {
    if (questionRef.current === null || questionNumber === undefined) return;

    questionRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    setCurrentStep(index);

    setAnswer((prevAnswer: ITravelQuestion[]) => [
      ...prevAnswer,
      { questionNumber, choiceNumber },
    ]);
  };

  const handleQuestionsSubmit = async () => {
    setToastMessage({
      message: '거의 다 왔어요!',
      type: 'success',
    });

    fetchPostMbti.mutate({ testId, answer });
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return {
    currentStep,
    mbtiQuestions,
    handleQuestionsSubmit,
    moveToNextQuestion,
  };
};
