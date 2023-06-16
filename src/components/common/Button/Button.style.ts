import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Button = styled.button`
  ${() => css`
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  `}
`;
