import { Box, Container, Flex, Grid, GridItem, HStack, Link } from '@chakra-ui/react'
import React from 'react'

export default function HeaderChatBox() {
    return (
        <Container>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                bg="gray.100"
                px={4}
                py={2}
            >
                <Box>
                    <Link href="/">上一頁</Link>
                </Box>
                <Grid>
                    <GridItem>大頭貼</GridItem>
                    <GridItem>名字</GridItem>
                </Grid>
                <Link href="/contact">設定</Link>
            </Flex>
        </Container>
    )
}