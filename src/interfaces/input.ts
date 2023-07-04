export type TextFieldStatus =
  | 'normal'
  | 'focus'
  | 'loading'
  | 'error'
  | 'success'
  | 'disabled';

export type TextFieldIconPosition = 'left' | 'right';

export type InputSizeType = 'large' | 'big' | 'normal' | 'small';

export type InputStatus =
  | 'normal'
  | 'disabled'
  | 'error'
  | 'loading'
  | 'success';

export interface ILabel {
  status?: TextFieldStatus;
  iconPosition?: string;
  width?: string;
  value?: string;
}

export interface IInput {
  status?: TextFieldStatus;
  iconPosition?: string;
  width?: string;
  value?: string;
  label?: string;
}
