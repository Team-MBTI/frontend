import * as S from './Button.style';

const Button = ({
  children,
  width,
  design,
  size,
  backgroundColor,
  color,
  onClick,
  className,
}: S.ButtonProps) => (
  <S.Button
    width={width}
    design={design}
    size={size}
    backgroundColor={backgroundColor}
    color={color}
    onClick={onClick}
    className={className}
  >
    {children}
  </S.Button>
);

export default Button;
