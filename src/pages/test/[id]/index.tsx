import { RefObject, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ProgressBar from '@/components/common/ProgressBar';
import * as S from '@/components/test/index.style';
import { questionNums } from '@/constants/mbti';
import { useMbtiTest } from '@/hooks/useMBTITest';
import theme from '@/styles/theme';

function Index() {
  const router = useRouter();

  const questionRef: RefObject<HTMLDivElement[]> = useRef([]);
  const {
    currentStep,
    moveToNextQuestion,
    handleQuestionsSubmit,
    mbtiQuestions,
    isLoading,
  } = useMbtiTest(questionRef, +router.query.id);

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.Section>
      <Link href="/">
        <Image priority src="/svg/back.svg" height={44} width={44} alt="back" />
      </Link>
      {mbtiQuestions &&
        mbtiQuestions.map((test, index) => (
          <S.Question
            key={test.questionNumber}
            isActive={currentStep === index}
            ref={(element: HTMLDivElement | null) => {
              if (element && questionRef.current) {
                questionRef.current[index] = element;
              }
            }}
          >
            <p>{test.content}</p>
            <S.CardWrapper>
              <S.Card
                isActive={currentStep === index}
                key={test.choiceOneContent}
                type="button"
                onClick={() => {
                  if (currentStep - 1 === index) {
                    moveToNextQuestion(index);
                  }
                }}
                onAnimationEnd={() => {
                  if (currentStep === index) {
                    moveToNextQuestion(index + 1, test.questionNumber, 1);
                  }
                }}
              >
                <p>{test.choiceOneContent}</p>
              </S.Card>
              <S.Card
                isActive={currentStep === index}
                key={test.choiceTwoContent}
                type="button"
                onClick={() => {
                  if (currentStep - 1 === index) {
                    moveToNextQuestion(index);
                  }
                }}
                onAnimationEnd={() => {
                  if (currentStep === index) {
                    moveToNextQuestion(index + 1, test.questionNumber, 2);
                  }
                }}
              >
                <p>{test.choiceTwoContent}</p>
              </S.Card>
            </S.CardWrapper>
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
      {currentStep !== questionNums && <S.NextArea />}
      <div style={{ marginBottom: '10px' }}>
        <Button
          width={320}
          design="solid"
          size="big"
          backgroundColor={theme.color.primary}
          color="white"
          onClick={handleQuestionsSubmit}
          disabled={currentStep !== 12}
        >
          결과 확인 하기
        </Button>
      </div>
    </S.Section>
  );
}

export default Index;
