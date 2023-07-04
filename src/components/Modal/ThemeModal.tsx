import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import useCopyClipBoard from '@/hooks/useCopyClipBoard';

import {
  ThemeModalBox,
  ThemeModalContainer,
  ThemeModalItemContainer,
  ThemeModalItem,
  ThemeModalContent,
  ThemeCloseBtn,
} from './ThemeModal.style';

type IThemeModal = {
  clickModal: () => void;
};

const ThemeModal = (props: IThemeModal) => {
  const { clickModal } = props;

  const [isCopy, onCopy] = useCopyClipBoard();

  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
    clickModal();
  };

  // 공유하기 버튼

  const router = useRouter();
  const url = process.env.API_URL + router.pathname;

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
        <ThemeModalContent>
          <ThemeModalItem>공유방식을 선택해주세요</ThemeModalItem>
          <ThemeModalItemContainer>
            <Image
              src="/images/kakaoCopy.png"
              alt="CopyImage"
              width={50}
              height={70}
            />
            <Image
              onClick={() => handleCopyClipBoard(url)}
              src="/images/linkCopy.png"
              alt="CopyImage"
              width={50}
              height={70}
            />
          </ThemeModalItemContainer>
        </ThemeModalContent>
      </ThemeModalContainer>
    </>
  );
};

export default ThemeModal;
