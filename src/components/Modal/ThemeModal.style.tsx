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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const ThemeModalContent = styled.div`
  padding-top: 1rem;
  width: 322px;
  height: 184px;
  @media screen and (max-width: 70em) {
    width: 40rem;
    height: 15rem;
  }
  @media screen and (max-width: 50.5em) {
    width: 20rem;
    height: 9rem;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ThemeModalItem = styled.div`
  font-size: 1.5rem;
`;

export const ThemeModalItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  row-gap: 1.875rem;
  padding: 0.5rem;
`;

export const ThemeCloseBtn = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.9rem;
  cursor: pointer;
  z-index: 99;
`;
