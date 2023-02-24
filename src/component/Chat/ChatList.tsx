import { Avatar, Box, Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import useChatData from "../../apis/"


export default function ChatList() {


    const query = useQuery('chatData', () => fetch("https://638b643281df38ab3467feab.mockapi.io/account1").then(r => r.json()))
    console.log(query);




    return (
        <Container>
            <Box p={4}>
                <Flex alignItems="center" mb={4}>
                    <Avatar size="sm" name="John Doe" mr={4} />
                    <Grid>
                        <GridItem>
                            <Heading>Job</Heading>
                        </GridItem>
                        <GridItem>
                            這裡是聊天文字內容...............................
                        </GridItem>
                    </Grid>

                    <Grid  >時間</Grid>
                </Flex>
                <Flex alignItems="center" mb={4}>
                    <Avatar size="sm" name="Jane Doe" mr={4} />


                </Flex>
                <Flex alignItems="center" mb={4}>
                    <Avatar size="sm" name="Bob Smith" mr={4} />
                </Flex>
            </Box>

        </Container>
    )
}