import React from 'react';

import styled from '@emotion/styled';

export const ToastContainer = styled.div`
  margin: auto;
  width: auto;
  height: auto;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 9999;
  top: -50px;
  right: 50%;
  transform: translateX(50%);
  z-index: 9999;
  background-color: #8d949f;
  animation: slideDown 3s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
  }

  & > div > span {
    color: #fff;
    font-size: 13px;
    font-family: Roboto;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.4px;
  }

  @keyframes slideDown {
    0% {
      top: -50px;
    }
    30% {
      top: 50px;
      opacity: 1;
    }
    100% {
      top: 50px;
      opacity: 0;
    }
  }
`;
