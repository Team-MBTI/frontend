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
  clickModal: React.MouseEventHandler<HTMLDivElement>;
};

const ThemeModal = (props: IThemeModal) => {
  const { clickModal } = props;

  const [isCopy, onCopy] = useCopyClipBoard();

  const handleCopyClipBoard = (text: string) => {
    onCopy(text);
  };

  // 공유하기 버튼

  const router = useRouter();
  const url = process.env.API_URL + router.pathname;

  return (
    <ThemeModalBox onClick={clickModal}>
      <ThemeModalContainer>
        <ThemeCloseBtn onClick={clickModal}>X</ThemeCloseBtn>
        <ThemeModalContent>
          <ThemeModalItem>공유방식을 선택해주세요</ThemeModalItem>
          <ThemeModalItemContainer>
            <Image
              src="/img/kakaoCopy.png"
              alt="CopyImage"
              width={50}
              height={70}
            />
            <Image
              onClick={() => handleCopyClipBoard(url)}
              src="/img/linkCopy.png"
              alt="CopyImage"
              width={50}
              height={70}
            />
          </ThemeModalItemContainer>
        </ThemeModalContent>
      </ThemeModalContainer>
    </ThemeModalBox>
  );
};

export default ThemeModal;
