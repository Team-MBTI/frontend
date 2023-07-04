import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const LoginWrapper = styled.section`
  ${flexbox({ dir: 'column', ai: 'center' })};
  padding: 57px 0 90px 0;
`;

export const Form = styled.form`
  margin-top: 158px;
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
