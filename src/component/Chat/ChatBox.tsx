import {
    Box, ButtonGroup,
    Container, Divider, Flex, Heading, HStack,
    IconButton, Input, InputGroup,
    InputRightElement, Stack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import HeaderChatBox from "./HeaderChatBox";
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Button } from '@chakra-ui/react'
import ChatBoxLeftNav from "./ChatBoxLeftNav";

export default function ChatBox() {


    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        // handle sending message logic
        setMessage("")
    };

    return (

        <Box
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            p="4"
            bg="white"
            borderTopWidth="1px"
            borderTopColor="gray.200"
        >
            {/* 聊天室頂部導航欄位 */}
            <HeaderChatBox />

            <HStack>
                {/* 聊天室左邊導航欄位 */}
                <ChatBoxLeftNav />
                {/* 聊天室聊天訊息內容 */}
                <Card maxW='sm'>
                    {/* 使用圖片，訂單，或檔案格式 */}
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Living room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>

                    {/* 一般文字顯示框 */}
                    <CardBody>
                        你好，請問營業麻？
                    </CardBody>
                    <CardBody>
                        營業時間為何？
                    </CardBody>
                    <Divider />

                    {/* 在聊天室中，砍入外部訂單的觸發事件按鈕 */}
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </HStack>
            {/* 底部輸入欄位 */}
            <Flex align="center" mt="4">

                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        placeholder="Type your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <IconButton
                            h="1.75rem"
                            size="sm"
                            icon={<AddIcon />}
                            onClick={handleSendMessage} aria-label={""} />
                    </InputRightElement>
                </InputGroup>


            </Flex>
        </Box>
    )
}