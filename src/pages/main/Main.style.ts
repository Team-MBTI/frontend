import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const MainWrapper = styled.section`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })};
  gap: 16px;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  color: #5344aa;
  font-size: 28px;
  font-weight: 400;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 1.25px;
`;

export const Logo = styled.img`
  width: 240px;
  height: 140px;
`;

export const Description = styled.span``;

export const LoginButtonWrapper = styled.div``;

export const BottomWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'flex-end', ai: 'center' })};
  margin-top: 80px;
  gap: 16px;
`;

export default function MainStyle() {}
