import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import theme from '@/styles/theme';

import { css } from '@emotion/react';

import * as S from './Main.style';

export default function Main() {
  const router = useRouter();
  return (
    <S.MainWrapper>
      <S.Title>여행 스타일 테스트</S.Title>
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
          onClick={() => router.push('/test/1')}
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
        >
          <S.Text>공유하기</S.Text>
        </Button>
      </S.BottomWrapper>
    </S.MainWrapper>
  );
}
