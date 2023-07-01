import { RefObject, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ProgressBar from '@/components/common/ProgressBar';
import * as S from '@/components/test/index.style';
import { useMbtiTest } from '@/hooks/useMBTITest';
import { useToastMessage } from '@/store/GlobalStore';
import theme from '@/styles/theme';

import styled from '@emotion/styled';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

interface IMbtiTest {
  question: string;
  answer: string[];
}

const mbtiTest: IMbtiTest[] = [
  {
    question: 'I enjoy socializing and being around people.',
    answer: ['Yes', 'No'],
  },
  {
    question:
      'When making decisions, I rely more on logic and objective analysis.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I prefer having a clear plan and sticking to it.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I enjoy trying new experiences and taking risks.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I am more focused on the present moment and immediate reality.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I value harmony and avoiding conflicts.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I enjoy analyzing complex theories and concepts.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I tend to focus more on the big picture and long-term goals.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I prefer following established rules and guidelines.',
    answer: ['Yes', 'No'],
  },
  {
    question:
      'I enjoy spending time alone and engaging in solitary activities.',
    answer: ['Yes', 'No'],
  },
  {
    question: 'I am more inclined to trust my intuition and gut feelings.',
    answer: ['Yes', 'No'],
  },
  {
    question:
      'I find it energizing to attend large social gatherings and meet new people.',
    answer: ['Yes', 'No'],
  },
];

function Index() {
  const questionRef: RefObject<HTMLDivElement[]> = useRef([]);
  const { currentStep, moveToNextQuestion } = useMbtiTest(questionRef);
  const setToastMessage = useToastMessage((state) => state.setToastMessage);

  return (
    <Layout>
      <S.Section>
        <Link href="/">
          <Image
            priority
            src="/svg/back.svg"
            height={44}
            width={44}
            alt="back"
          />
        </Link>
        {mbtiTest.map((test, index) => (
          <S.Question
            key={test.question}
            isActive={currentStep === index}
            ref={(element: HTMLDivElement | null) => {
              if (element && questionRef.current) {
                questionRef.current[index] = element;
              }
            }}
          >
            <p>{test.question}</p>
            <div>
              {test.answer.map((answer) => (
                <S.Card
                  isActive={currentStep === index}
                  key={test.question + answer}
                  type="button"
                  onClick={() => {
                    if (currentStep - 1 === index) {
                      moveToNextQuestion(index);
                    }
                  }}
                  onAnimationEnd={() => {
                    if (currentStep === index) {
                      moveToNextQuestion(index + 1);
                    }
                  }}
                >
                  <p>선택지에 대한 설명</p>
                </S.Card>
              ))}
            </div>
          </S.Question>
        ))}
        <ProgressBar currentStep={currentStep} color={theme.color.primary} />
        {currentStep > 0 && (
          <S.PreviousArea
            onClick={() => {
              moveToNextQuestion(currentStep - 1);
            }}
          />
        )}
        <S.ResultButton
          onClick={() =>
            setToastMessage({
              message: '거의 다 왔어요!',
              type: 'success',
            })}
        >
          결과 확인 하기
        </S.ResultButton>
      </S.Section>
    </Layout>
  );
}

export default Index;
