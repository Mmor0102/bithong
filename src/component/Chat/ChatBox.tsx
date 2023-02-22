import { ButtonGroup, Card, CardBody, Container, Divider, Flex, Heading, HStack, Input, Stack } from "@chakra-ui/react";
import React from "react";



export default function ChatBox() {
    return (
        <Container maxW="container.sm" flex={1} >
            <HStack>
                <Card>
                    <CardBody>
                        <Stack mt='300' spacing='4' >

                        </Stack>
                    </CardBody>
                </Card>
            </HStack>
            <Stack>
                <Card maxW='lg'>
                    <CardBody>
                        {/* <Image
                           
                        /> */}
                        <Stack mt='6' spacing='4' >

                            {/* <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text> */}
                        </Stack>
                    </CardBody>

                    <CardBody>
                        <Stack mt='300' spacing='4' >

                        </Stack>
                    </CardBody>

                    <CardBody>
                        <Stack mt='6' spacing='4' >
                        </Stack>
                    </CardBody>

                    <Divider />
                    <Input placeholder='輸入訊息'
                        htmlSize={4} width='auto' />
                </Card>
            </Stack>

        </Container>
    )
}