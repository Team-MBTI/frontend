import * as S from './Button.style';

const Button = ({
  children,
  width,
  design,
  size,
  backgroundColor,
  color,
}: S.ButtonProps) => (
  <S.Button
    width={width}
    design={design}
    size={size}
    backgroundColor={backgroundColor}
    color={color}
  >
    {children}
  </S.Button>
);

export default Button;
