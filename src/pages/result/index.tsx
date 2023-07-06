import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import ThemeModal from '@/components/Modal/ThemeModal';
import ShareBox from '@/components/ShareBox';

import * as S from './Result.style';

function Result() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const router = useRouter();

  const { resultId, destinationImgUrl, destinationName, mbti } = router.query;

  if (!resultId) return <LoadingSpinner />;

  return (
    <S.Container data-id={resultId}>
      <S.ResultWrapper>
        <S.TitleText>나의 여행 스타일은?</S.TitleText>
        <S.MbtiText>{mbti}</S.MbtiText>
        <S.DestinationImage
          src={destinationImgUrl as string}
          alt="Result Image"
          width="300"
          height="290"
        />
        <S.SubText>{destinationName}</S.SubText>
      </S.ResultWrapper>
      <S.ButtonWrapper>
        <S.MoreInfoButton onClick={() => router.push('/')}>
          홈으로
        </S.MoreInfoButton>
        <S.ShareButton onClick={toggleModal}>공유하기</S.ShareButton>
        {showModal && (
          <ThemeModal clickModal={toggleModal}>
            <ShareBox handleCancleClick={toggleModal} />
          </ThemeModal>
        )}
        <Link href="/login">
          <S.ResultMore>로그인하고 다른 결과 둘러보기</S.ResultMore>
        </Link>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default Result;
