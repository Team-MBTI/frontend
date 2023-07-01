import { IInput, ILabel, TextFieldStatus } from '@/interfaces/input';
import { flexbox } from '@/styles/mixin';

import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  text-decoration: underline;
`;

const createStyleByStatus = (status?: TextFieldStatus): SerializedStyles => {
  switch (status) {
    case 'normal':
      return css`
        color: #888888;
      `;
    case 'error':
      return css`
        color: #fb625b;
      `;
    case 'success':
      return css`
        color: #36bd7c;
      `;
    case 'disabled':
      return css`
        color: '#b0bbcd';
      `;
    default:
      return createStyleByStatus('normal');
  }
};

const calculatedStatusColor = (status?: TextFieldStatus): string => {
  switch (status) {
    case 'success':
      return '#36BD7C';
    case 'error':
      return '#FF8970';
    default:
      return '#888888';
  }
};

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const IconLeftBox = styled.div`
  ${flexbox({})};
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const IconRightBox = styled.div`
  ${flexbox({})};
  position: absolute;
  top: 12px;
  right: 10px;

  > ${Icon} {
    &:nth-child(2) {
      margin-left: 4px;
    }
  }
`;

export const InputLabel = styled.label<ILabel>`
  position: absolute;
  top: ${({ status, value }) => (status === 'focus' || value ? '5px' : '14px')};
  ${({ iconPosition }) => iconPosition === 'left' && 'left: 44px'};
  width: ${({ width }) => width};
  ${({ iconPosition, width }) => iconPosition && `calc(${width} - 56}px)`};

  color: #8d94a0;
  font-size: 13px;
  overflow: hidden;
  transition: all 0.2s ease;

  ${({ status }) => createStyleByStatus(status)}
`;

export const Input = styled.input<IInput>`
  position: relative;
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: 70px;
  padding: 0 6px;
  font-size: 26px;
  color: #b1b8c0;
  background-color: #ffffff00;
  transition: all 0.2s ease;
  overflow: hidden;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ status }) => calculatedStatusColor(status)};

  ${({ label }) => label && 'padding-top: 24px'};
  ${({ iconPosition }) => iconPosition === 'left' && 'padding-left: 44px'};
  ${({ iconPosition }) => iconPosition === 'right' && 'padding-right: 44px'};

  ${({ iconPosition, status }) =>
    iconPosition === 'right' &&
    (status === 'success' || status === 'error') &&
    'padding-right: 65px'};

  ${({ iconPosition, status }) =>
    (iconPosition === 'left' || !iconPosition) &&
    (status === 'success' || status === 'error') &&
    'padding-right: 32px'};

  &::placeholder {
    color: '#ffffff00';
  }
`;
