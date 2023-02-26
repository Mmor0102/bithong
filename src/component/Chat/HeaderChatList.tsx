import { Avatar, Badge, Box, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

interface ChatHeaderListProps {
    avatar: string;
    name: string;
    status: string;
    searchKey: string;
    setSearchKey: Dispatch<SetStateAction<any>>

};


// 聊天列表的頂部導航欄位
export default function HeaderChatList({ searchKey, setSearchKey }: ChatHeaderListProps) {

    return (
        <Flex
            px={4}
            py={2}
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="gray.200"
        >
            <Avatar size="md" mr={3} />
            <HStack spacing={4}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='搜尋' onChange={(e) =>
                        setSearchKey(e.target.value)} value={searchKey}
                    />
                </InputGroup>


            </HStack>
            <Box>
                <Text fontSize="lg" fontWeight="semibold">

                </Text>
                <Text fontSize="sm" color="gray.500">

                </Text>
            </Box>
            <Badge
                colorScheme="green"
                variant="solid"
                ml="auto"
                fontSize="sm"
                px={2}
            >
                3
            </Badge>
        </Flex>
    )
}