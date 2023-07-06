import React, { useEffect } from 'react';

import * as S from './Layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const kakao = (window as any).Kakao;

    kakao.init(process.env.KAKAO_SHARE_KEY);
  }, []);

  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
