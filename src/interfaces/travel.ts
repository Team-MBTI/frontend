interface ITravelQuestion {
  questionNumber: number;
  choiceNumber: number;
}

interface IMbtiResultContent {
  resultId: number;
  destinationName: string;
  destinationImgUrl: string;
  destinationContent: string;
  destinationContentImgUrl: string;
  mbti: string;
}

interface IPostMbtiResponse {
  status: string;
  data: IMbtiResultContent;
}

export type { ITravelQuestion, IMbtiResultContent, IPostMbtiResponse };
