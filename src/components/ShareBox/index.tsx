import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import useCopyClipBoard from '@/hooks/useCopyClipBoard';
import { useToastMessage } from '@/store/GlobalStore';

import * as S from './ShareBox.style';

interface IShareBox {
  handleCancleClick: () => void;
}

const ShareBox = ({ handleCancleClick }: IShareBox) => {
  const router = useRouter();
  const [isCopy, setIsCopy] = useCopyClipBoard();
  const [copyText, setCopyText] = useState('');
  const setToastMessage = useToastMessage((state) => state.setToastMessage);

  const handleCopyClipBoard = (text: string) => {
    setCopyText(text);
    handleCancleClick();
    setToastMessage({
      message: `${text} 링크가 복사되었어요. 공유하고 싶은 곳에 ‘붙여넣기’ 하세요!`,
      type: 'success',
    });
  };

  const handleKakaoShare = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendScrap({
      requestUrl: location.href,
    });
    handleCancleClick();
  };

  const url = process.env.API_URL + router.pathname;

  return (
    <S.ShareBox>
      <S.ItemContainer>
        <S.Title>공유 방식을 선택해주세요</S.Title>
        <S.Content>
          <Image
            src="/images/kakaoCopy.png"
            alt="CopyImage"
            width={50}
            height={70}
            style={{ cursor: 'pointer' }}
            onClick={handleKakaoShare}
          />
          <Image
            src="/images/linkCopy.png"
            alt="CopyImage"
            width={50}
            height={70}
            style={{ cursor: 'pointer' }}
            onClick={() => handleCopyClipBoard(url)}
          />
        </S.Content>
      </S.ItemContainer>
    </S.ShareBox>
  );
};

export default ShareBox;
