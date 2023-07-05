import { flexbox } from '@/styles/mixin';

import styled from '@emotion/styled';

export const ShareBox = styled.div``;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Content = styled.div`
  ${flexbox({ jc: 'space-around' })};

  position: relative;
`;

export const ItemContainer = styled.div`
  ${flexbox({ dir: 'column' })};
  gap: 16px;
`;
