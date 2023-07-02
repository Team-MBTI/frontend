import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const MainWrapper = styled.section`
  ${flexbox({ dir: 'column', ai: 'center' })};
  width: 100%;
  height: 100%;
  padding: 134px 0 78px 0;
`;

export const Title = styled.h1`
  color: #5344aa;
  font-size: 22px;
  font-family: NanumSquare Neo;
  font-weight: 400;
`;

export const Text = styled.span`
  font-size: 18px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 1.25px;
`;

export const Logo = styled.img`
  width: 240px;
  height: 140px;
  margin-top: 50px;
`;

export const Description = styled.span``;

export const LoginButtonWrapper = styled.div`
  margin-top: 27px;
`;

export const BottomWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'flex-end', ai: 'center' })};
  margin-top: 120px;
  gap: 16px;
`;

export default function MainStyle() {}
