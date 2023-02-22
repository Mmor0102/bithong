import { Avatar, Box, Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";





export default function ChatList() {
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