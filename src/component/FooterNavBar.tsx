import { Box, Link, Stack, Flex } from "@chakra-ui/react";
import React from "react";



export default function FooterNavBar() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="gray.100"
      px={4}
      py={2}
    >
      <Link href="/">首頁</Link>
      <Link href="/about">訊息</Link>
      <Link href="/contact">會員</Link>
    </Flex>
  );
}
