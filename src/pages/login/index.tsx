import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import theme from '@/styles/theme';

import { css } from '@emotion/react';

import * as S from './Login.style';

export default function Login() {
  const router = useRouter();
  return (
    <S.LoginWrapper>
      <S.Title>로그인</S.Title>
      <S.Form>
        <S.InputWrapper>
          <Input
            width="337px"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            type="email"
            name="email"
            status="normal"
            value="jinlog9@gmail.com"
          />
          <Input
            width="337px"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
            status="normal"
            value="*********"
          />
        </S.InputWrapper>
        <S.LoginButtonWrapper>
          <Button
            width={333}
            size="large"
            backgroundColor={theme.color.primary}
            color="#fff"
            css={css`
              font-size: 18px;
              font-weight: 500;
            `}
          >
            로그인
          </Button>
        </S.LoginButtonWrapper>
        <S.BottomWrapper>
          <Button
            width={333}
            size="large"
            backgroundColor="#FEE500"
            color="#585858"
            css={css`
              font-size: 18px;
              font-weight: 600;
            `}
          >
            카카오 로그인
          </Button>
          <S.SignUpButton onClick={() => router.push('/signup')}>
            회원 가입
          </S.SignUpButton>
        </S.BottomWrapper>
      </S.Form>
    </S.LoginWrapper>
  );
}
