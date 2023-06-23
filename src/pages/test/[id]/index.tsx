import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ProgressBar from '@/components/common/ProgressBar';

import styled from '@emotion/styled';

interface Props {
  isActive?: boolean;
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  max-width: 390px;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
`;

const Question = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  & > p {
    text-align: center;
    color: ${(props) => (props.isActive ? 'black' : 'rgba(0,0,0,0.1)')};
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const Card = styled.button<Props>`
  width: 164px;
  height: 123px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.isActive ? '#D9D8DC' : 'rgba(0,0,0,0.1)')};
  transition: 0.5s;

  &:hover {
    border: ${(props) =>
    props.isActive ? '2px solid #5344AA;' : '1px solid rgba(0,0,0,0.1)'};
  }

  & p {
    color: ${(props) => (props.isActive ? '#232323' : 'rgba(0,0,0,0.1)')};
  }

  &:hover p {
    font-weight: bold;
    color: ${(props) => (props.isActive ? '#5344AA;' : 'rgba(0,0,0,0.1)')};
  }
`;

const ResultButton = styled.button`
  color: white;
  width: 100%;
  height: 40px;
  margin: auto;
  border-radius: 15px;
  background-color: #5344aa;
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
  const questionRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const moveToNextQuestion = (index: number) => {
    questionRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    setCurrentStep(index);
  };

  return (
    <Layout>
      <Section>
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
          <Question
            isActive={currentStep === index}
            ref={(element) => (questionRef.current[index] = element)}
          >
            <p>{test.question}</p>
            <div>
              {test.answer.map((answer) => (
                <Card
                  isActive={currentStep === index}
                  key={test.question + answer}
                  type="button"
                  onClick={() => {
                    if (currentStep - 1 === index) {
                      moveToNextQuestion(index);
                    } else if (currentStep === index) {
                      moveToNextQuestion(index + 1);
                    }
                  }}
                >
                  <p>선택지에 대한 설명</p>
                </Card>
              ))}
            </div>
          </Question>
        ))}
        <ResultButton>결과 확인 하기</ResultButton>
        <ProgressBar currentStep={currentStep} />
      </Section>
    </Layout>
  );
}

export default Index;
