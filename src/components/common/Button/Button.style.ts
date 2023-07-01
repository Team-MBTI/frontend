import { ReactNode } from 'react';

import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

type ButtonSizeType = 'large' | 'big' | 'normal' | 'small';
type DesignType = 'solid' | 'ghost' | 'outline' | 'reject';

export interface ButtonProps {
  children?: ReactNode;
  design?: DesignType;
  width: number;
  size: ButtonSizeType;
  backgroundColor?: string;
  color?: string;
}

const padding: Record<ButtonSizeType, string> = {
  large: '0 16',
  big: '0 16',
  normal: '0 12',
  small: '0 12',
};

const height: Record<ButtonSizeType, number> = {
  large: 58,
  big: 50,
  normal: 42,
  small: 34,
};

// ButtonBase 만든이유 ? 기존 default Button 이외에 다른 종류의 버튼이 생길 수도 있어서(Ex. ToggleButton)
const ButtonBase = styled.button`
  ${flexbox({ jc: 'center', ai: 'center' })};
  appearance: none;
  margin: 0;
  border: none;
  border-radius: 0;
  padding: 0;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;

  text-align: initial;
  font-family: Roboto;
  background-color: transparent;
  color: #000;

  &:disabled {
    cursor: default;
  }
`;

export const Button = styled(ButtonBase)<ButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: ${({ size }) => padding[size]}px;
  width: ${({ width }) => width}px;
  height: ${({ size }) => height[size]}px;
  border-radius: 13px;

  ${({ design }) =>
    design === 'reject' &&
    `
    border: 1px solid #ff5757;
    color: #ff5757;

    &:hover {
      background: #ffe5e5;
    }

    &:disabled,
    &.disabled {
      background: #ffe5e5;
      color: #ff5757;
    }
  `}
`;
