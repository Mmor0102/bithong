import { Button, Collapse, HStack, Stack, VStack } from "@chakra-ui/react"
import React from "react"
import { IconButton } from '@chakra-ui/react'



// 聊天室裡左邊的導航欄位
export default function ChatBoxLeftNav() {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

    return (
        <VStack>
            <Collapse in={show}>
                "＃大標題一 內容fafafdasfasdfasfasdfasfasdfasdfasdfasfasfsadfasf"
                "＃大標題二 內容fafafdasfasdfasfasdfasfasdfasdfasdfasfasfsadfasf"
                "＃大標題三 內容fafafdasfasdfasfasdfasfasdfasdfasdfasfasfsadfasf"
                "＃大標題四 內容fafafdasfasdfasfasdfasfasdfasdfasdfasfasfsadfasf"
            </Collapse>

            {/* 自定義＃可自由增加類型type */}
            <Button size='sm' onClick={handleToggle} mt='1rem'>
                ＃公告
            </Button>
            <Button size='sm' onClick={handleToggle} mt='1rem'>
                ＃訂單
            </Button>
            <Button size='sm' onClick={handleToggle} mt='1rem'>
                ＃標題
            </Button>
            <Button size='sm' onClick={handleToggle} mt='1rem'>
                ＃圖片
            </Button>
            <Button size='sm' onClick={handleToggle} mt='1rem'>
                ＃檔案
            </Button>
        </VStack>
    )
}