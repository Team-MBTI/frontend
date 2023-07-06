import Image from 'next/image';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

import styled from '@emotion/styled';

export const Container = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })};
  height: 100vh;
`;

export const ResultWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'space-around', ai: 'center' })}
  gap: 20px;

  background-color: white;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;

  border: 1px solid red;
  border-radius: 15px;
`;

export const TitleText = styled.div`
  font-size: 28px;
`;

export const MbtiText = styled.h1`
  color: ${theme.color.primary};
  font-size: 28px;
`;

export const DestinationImage = styled(Image)``;

export const SubText = styled.div`
  font-size: 24px;
  color: #5344aa;
`;

export const ButtonWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'space-around', ai: 'center' })}
  gap: 16px;
  width: 100%;
  margin-top: 32px;
`;

export const MoreInfoButton = styled.button`
  width: 100%;
  height: 64px;

  color: white;
  background-color: #5344aa;

  border-radius: 15px;

  text-align: center;
  font-size: 18px;
  letter-spacing: 1.25px;
`;

export const ShareButton = styled.button`
  width: 100%;
  height: 64px;

  color: #585858;
  background-color: white;

  border: 1px solid #585858;
  border-radius: 15px;

  text-align: center;
  font-size: 18px;
  letter-spacing: 1.25px;
`;

export const ResultMore = styled.div`
  margin-top: 10px;
  text-decoration: underline;
`;

export default function ResultStyle() {}
