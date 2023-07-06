import { useRouter } from 'next/router';

import { getMbtiList } from '@/apis/travel';
import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ThemeModal from '@/components/Modal/ThemeModal';
import ShareBox from '@/components/ShareBox';
import { useGlobalModal } from '@/store/GlobalStore';
import theme from '@/styles/theme';

import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';

import * as S from './Main.style';

export default function Main() {
  const { data: travelList, isLoading } = useQuery(['mbtiList'], getMbtiList);
  const router = useRouter();

  const showModal = useGlobalModal((state) => state.showModal);
  const toggleModal = useGlobalModal((state) => state.toggleModal);

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.MainWrapper>
      <S.Title>{travelList[0]?.name || '데이터 불러 오는 중....'}</S.Title>
      <S.Logo src="/images/logo.png" alt="logo image" />
      <S.Description>성향에 딱 맞는 여행지를 알려드려요!</S.Description>
      <S.LoginButtonWrapper>
        <Button
          width={333}
          size="large"
          backgroundColor={theme.color.primary}
          color="#fff"
          onClick={() => router.push('/login')}
        >
          <S.Text>로그인 또는 회원가입</S.Text>
        </Button>
      </S.LoginButtonWrapper>
      <S.BottomWrapper>
        <Button
          width={333}
          size="large"
          backgroundColor={theme.color.secondary}
          color="#fff"
          onClick={() => router.push(`/test/${travelList[0]?.id}`)}
        >
          <S.Text>로그인 없이 시작하기</S.Text>
        </Button>
        <Button
          width={333}
          size="large"
          backgroundColor="#fff"
          color="#585858"
          css={css`
            border: 1px solid black;
          `}
          onClick={toggleModal}
        >
          <S.Text>공유하기</S.Text>
        </Button>
      </S.BottomWrapper>
      {showModal && (
        <ThemeModal clickModal={toggleModal}>
          <ShareBox handleCancleClick={toggleModal} />
        </ThemeModal>
      )}
    </S.MainWrapper>
  );
}
