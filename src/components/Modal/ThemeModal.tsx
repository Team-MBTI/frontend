import React from 'react';

import Image from 'next/image';

import {
  ThemeModalBox,
  ThemeModalContainer,
  ThemeCloseBtn,
} from './ThemeModal.style';

type IThemeModal = {
  clickModal: () => void;
  children: React.ReactNode;
};

const ThemeModal = (props: IThemeModal) => {
  const { clickModal, children } = props;

  return (
    <>
      <ThemeModalBox onClick={clickModal} />
      <ThemeModalContainer>
        <ThemeCloseBtn onClick={clickModal}>
          <Image
            src="/images/close.png"
            alt="modal close image"
            width={32}
            height={32}
          />
        </ThemeCloseBtn>
        {children}
      </ThemeModalContainer>
    </>
  );
};

export default ThemeModal;
