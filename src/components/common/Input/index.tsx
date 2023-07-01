import React, { useState } from 'react';

import { InputStatus, TextFieldIconPosition } from '@/interfaces/input';

import * as S from './Input.style';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  width: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  status: InputStatus;
  value: string;
  icon?: string;
  iconPosition?: TextFieldIconPosition;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    width,
    label,
    placeholder,
    type,
    name,
    status = 'normal',
    value,
    icon,
    iconPosition,
    id,
    onChange,
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const inputStatus = status === 'normal' && isFocused ? 'focus' : status;

  return (
    <S.InputWrapper id={id}>
      {iconPosition === 'left' && (
        <S.IconLeftBox>
          <S.Icon src={icon} />
        </S.IconLeftBox>
      )}
      {label && (
        <S.InputLabel
          status={inputStatus}
          iconPosition={iconPosition}
          width={width}
        >
          {label}
        </S.InputLabel>
      )}
      <S.Input
        ref={ref}
        width={width}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        status={inputStatus}
        label={label}
        iconPosition={iconPosition}
        disabled={status === 'disabled'}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {/* <S.IconRightBox>
        {status === 'error' && (
          <S.Icon src="/public/svg/ic-textfielderror-24.svg" alt="error icon" />
        )}
        {status === 'success' && (
          <S.Icon
            src="/public/svg/ic-textfield-success-24.svg"
            alt="success icon"
          />
        )}
        {iconPosition === 'right' && <S.Icon src={icon} />}
      </S.IconRightBox> */}
    </S.InputWrapper>
  );
};

export default React.forwardRef(Input);
