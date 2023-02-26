import {
    Avatar, Box, Flex,
    Heading, Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import HeaderChatList from "./HeaderChatList";
import { Spinner } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import Chat from "../../routes/Chat/Chat";



interface Chat {
    id: string;
    message: string;
    nickname: string;
    name: string;
    lastMessage: string;
    avatar: string;


};
// 聊天列表
export default function ChatList() {
    const [searchKey, setSearchKey] = useState("")

    const query = useQuery('chatData', () => fetch("https://638b643281df38ab3467feab.mockapi.io/account1").then(r => r.json()))
    console.log(query);



    const chats: Chat[] = query.data?.filter?.((chatSearch: {
        nickname: any; message: string | string[];
    }) => {
        if (chatSearch.message.includes(searchKey)) { return true }
        else if (chatSearch.nickname.includes(searchKey)) { return true }
        else return false;
    }
    );
    if (query.isLoading) {
        return (<Spinner />)
    }




    return (

        <Box>
            <HeaderChatList setSearchKey={setSearchKey}
                searchKey={searchKey} avatar={""} name={""} status={""} />


            {chats.map((chatListData, index) => (
                <Flex key={index} align="center" p={2} borderRadius="md" _hover={{ bg: 'gray.50' }} >
                    <Avatar src={chatListData.avatar} size="md" mr={4} />
                    <Link to="/chatbox" >
                        <Box>
                            <Text fontWeight="bold">{chatListData.nickname}</Text>
                            <Text color="gray.500">{chatListData.message
                            }</Text>
                        </Box>
                    </Link>
                </Flex>
            ))}
        </Box>)
}