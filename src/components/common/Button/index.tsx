import * as S from './Button.style';

const Button = ({
  children,
  width,
  design,
  size,
  backgroundColor,
  color,
  onClick,
  ...props
}: S.ButtonProps) => (
  <S.Button
    width={width}
    design={design}
    size={size}
    backgroundColor={backgroundColor}
    color={color}
    onClick={onClick}
    {...props}
  >
    {children}
  </S.Button>
);

export default Button;
