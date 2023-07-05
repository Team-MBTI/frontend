import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const Container = styled.div`
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })}
`;

export const ResultWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'space-around', ai: 'center' })}

  width: 100%;
  height: 100%;
  padding: 37px 0 78px 0;

  background-color: white;
  border-radius: 15px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;

  border: 1px solid red;
  border-radius: 15px;
`;

export const TitleText = styled.div`
  font-size: 18px;
  padding: 10px 0px;
  text-align: center;
`;

export const SubText = styled.div`
  font-size: 24px;
  color: #5344aa;
  padding: 10px 0px;
`;

export const ButtonWrapper = styled.div`
  ${flexbox({ dir: 'column', jc: 'space-around', ai: 'center' })}
  gap: 16px;

  width: 100%;
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
