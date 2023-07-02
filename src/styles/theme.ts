const calcRem = (size: number): string => `${size / 16}rem`;

const color = {
  primary: '#5344AA',
  secondary: '#E14D6C'
};

const fontSize = {
  xs: calcRem(12),
  sm: calcRem(16),
  md: calcRem(18),
  lg: calcRem(24),
  display: calcRem(32),
};

const theme = {
  color,
  fontSize,
};

export default theme;
