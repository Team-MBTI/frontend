import { ThemeModalBox, ThemeModalContainer, ThemeModalItemContainer, ThemeModalItem, ThemeModalContent, ThemeCloseBtn } from './ThemeModal.style'
import useCopyClipBoard from "@/hooks/useCopyClipBoard"

import { useRouter } from "next/router";
import Image from 'next/image'

const ThemeModal = (props: any) => {
    const { ClickModal } = props

    const [isCopy, onCopy] = useCopyClipBoard();

    const handleCopyClipBoard = (text: string) => {
        onCopy(text);
    };

    //공유하기 버튼
    
    const router = useRouter();
    const url = 'http://localhost:3000' + router.pathname

    return (
        <ThemeModalBox onClick={ClickModal}>
            <ThemeModalContainer>
                <ThemeCloseBtn onClick={ClickModal}>X</ThemeCloseBtn>
                <ThemeModalContent>
                    <ThemeModalItem>공유방식을 선택해주세요</ThemeModalItem>
                    <ThemeModalItemContainer>
                        <Image 
                            src="/img/kakaoCopy.png" 
                            alt='CopyImage' 
                            width={50}
                            height={70} />
                        <Image
                            onClick={() => handleCopyClipBoard(url)}
                            src="/img/linkCopy.png"
                            alt='CopyImage'  
                            width={50}
                            height={70} />
                            { isCopy && ClickModal }

                    </ThemeModalItemContainer>
                </ThemeModalContent>
            </ThemeModalContainer>
        </ThemeModalBox>
    )
}

export default ThemeModal