import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { InputStatus } from '@/interfaces/input';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

import { css } from '@emotion/react';

import * as S from './Login.style';

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    // 폼 데이터 제출 시 실행되는 함수
    alert('서비스 준비중입니다. 카카오로 로그인 해주세요.');

    if (!email || !password) return false;

    // TODO: call login api
    return true;
  };

  const checkStatus = (value: string | unknown): InputStatus => {
    if (!isSubmitting) {
      return 'normal';
    }

    if (value) {
      return 'error';
    }

    return 'success';
  };

  const kakaoInit = () => {
    const kakao = (window as any).Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.KAKAO_SHARE_KEY);
    }

    return kakao;
  };

  const kakaoLogin = () => {
    const kakao = kakaoInit();

    kakao.Auth.authorize({
      redirectUri: `${process.env.API_URL}/auth/kakao/callback`,
    });
  };

  return (
    <S.LoginWrapper>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <Input
            width="337px"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            type="email"
            status={checkStatus(errors.email)}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: '올바른 이메일 형식을 입력해주세요.',
              },
            })}
          />
          <Input
            width="337px"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            status={checkStatus(errors.password)}
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호를 사용하세요.',
              },
            })}
          />
        </S.InputWrapper>
        <S.LoginButtonWrapper>
          <Button
            width={333}
            size="large"
            backgroundColor={theme.color.primary}
            color="#fff"
            type="submit"
            css={css`
              font-size: 18px;
              font-weight: 500;
            `}
          >
            로그인
          </Button>
        </S.LoginButtonWrapper>
      </S.Form>

      <S.BottomWrapper>
        <Button
          width={333}
          size="large"
          backgroundColor="#FEE500"
          color="#585858"
          css={css`
            ${flexbox({})};
            gap: 6px;
            font-size: 18px;
            font-weight: 600;
          `}
          onClick={kakaoLogin}
        >
          <Image
            priority
            src="/images/kakao_login_large_narrow.png"
            height={24}
            width={24}
            alt="kakao logo image"
          />
          카카오 로그인
        </Button>

        <S.SignUpButton onClick={kakaoLogin}>회원 가입</S.SignUpButton>
      </S.BottomWrapper>
    </S.LoginWrapper>
  );
}
