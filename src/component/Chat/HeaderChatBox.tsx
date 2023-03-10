import { Flex, Avatar, Text, Box, Badge } from '@chakra-ui/react'
import React from 'react'


interface ChatHeaderBoxProps {
    avatar: string;
    name: string;
    status: string;
}
// 聊天室頂部導航欄位
export default function HeaderChatBox() {
    return (
        <Flex
            px={4}
            py={2}
            alignItems="center"
            borderBottomWidth={1}
            borderBottomColor="gray.200"
        >
            <Avatar size="md" mr={3} />
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