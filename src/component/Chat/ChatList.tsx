import {
    Avatar, Box, Flex,
    Heading, Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import HeaderChatList from "./HeaderChatList";


interface Chat {
    name: string;
    lastMessage: string;
    avatar: string;


};
// 聊天列表
export default function ChatList() {


    const query = useQuery('chatData', () => fetch("https://638b643281df38ab3467feab.mockapi.io/account1").then(r => r.json()))
    console.log(query);

    const chats: Chat[] = [
        {
            name: 'John Doe',
            lastMessage: 'Hey, what\'s up?',
            avatar: 'https://avatars.dicebear.com/api/male/john-doe.svg',
        },
        {
            name: 'Jane Doe',
            lastMessage: 'Not much. How about you?',
            avatar: 'https://avatars.dicebear.com/api/female/jane-doe.svg',
        },
        {
            name: 'Bob Smith',
            lastMessage: 'Can\'t talk right now. Busy.',
            avatar: 'https://avatars.dicebear.com/api/male/bob-smith.svg',
        },
    ];





    return (

        <Box>
            <HeaderChatList />
            {chats.map((chat, index) => (
                <Flex key={index} align="center" p={2} borderRadius="md" _hover={{ bg: 'gray.50' }} >
                    <Avatar src={chat.avatar} size="md" mr={4} />
                    <Link to="/chatbox" >
                        <Box>
                            <Text fontWeight="bold">{chat.name}</Text>
                            <Text color="gray.500">{chat.lastMessage}</Text>
                        </Box>
                    </Link>
                </Flex>
            ))}
        </Box>)
}