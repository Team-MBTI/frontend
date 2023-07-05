import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const ThemeModalBox = styled.div`
  ${flexbox({ jc: 'center', ai: 'center' })};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ThemeModalContainer = styled.div`
  width: 322px;
  height: 183px;
  ${flexbox({ dir: 'column', jc: 'center', ai: 'center' })};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const ThemeCloseBtn = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.9rem;
  cursor: pointer;
  z-index: 99;
`;
