import { ReactNode } from 'react';

import { flexbox } from '@/styles/mixin';

import { css } from '@emotion/react';
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
  large: '0 16px',
  big: '0 16px',
  normal: '0 12px',
  small: '0 12px',
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

  ${() => css`
    &.reject {
      border: 1px solid #ff5757;
      color: #ff5757;
    }
    &.reject:hover {
      background: ##FFE5E5
    }
    &.reject:disabled,
    &.reject.disabled {
      background: ##FFE5E5
      color: #ff5757;
    }
  `};
`;
