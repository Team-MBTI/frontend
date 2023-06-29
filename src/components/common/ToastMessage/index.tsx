import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { useToastMessage } from '@/store/GlobalStore';

import * as S from './ToastMessage.style';

const ToastMessage = () => {
  const { message, type } = useToastMessage((state) => state.toast);
  const setToastMessage = useToastMessage((state) => state.setToastMessage);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setToastMessage({
          message: '',
          type: 'success',
        });
      }, 3000);
    }
  }, [message, setToastMessage]); // added missing comma and fixed the dependency array

  if (!showMessage) return null;

  return (
    <S.ToastContainer>
      <div>
        {type === 'success' && (
          <Image width={22} height={22} src="/svg/check.svg" alt="check" />
        )}
        <span>{message}</span>
      </div>
    </S.ToastContainer>
  );
};

export default ToastMessage;
