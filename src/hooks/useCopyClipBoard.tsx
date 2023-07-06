import { useState } from 'react';

type onCopyFn = (text: string) => Promise<boolean>;

function useCopyClipBoard(): [boolean, onCopyFn] {
  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  };

  return { onCopy };
}

export default useCopyClipBoard;
