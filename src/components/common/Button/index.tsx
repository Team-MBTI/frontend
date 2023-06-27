import { ReactNode } from 'react';

import * as S from './Button.style';

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => <S.Button>{children}</S.Button>;

export default Button;
