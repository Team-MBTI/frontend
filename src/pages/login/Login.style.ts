import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const LoginWrapper = styled.section`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })};
  height: 100vh;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const InputWrapper = styled.div`
  ${flexbox({ dir: 'column' })};
  gap: 32px;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: 42px;
`;

export const BottomWrapper = styled.div`
  ${flexbox({ dir: 'column', ai: 'center' })};
  gap: 42px;
  margin-top: 65px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.15px;
`;

export const SignUpButton = styled.div`
  font-size: 18px;
  font-weight: 400;
  border-bottom: 1px solid #000;
  cursor: pointer;
`;

export default function Login() {}
