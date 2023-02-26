import {
  Box, Link, Stack, Flex, useColorModeValue
  , Text,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, AddIcon, WarningIcon, SettingsIcon } from '@chakra-ui/icons'


// 共用底部導航欄位
export default function FooterNavBar() {

  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={{ base: 4, md: 8 }}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Box>

        <IconButton
          aria-label="Facebook"
          icon={<PhoneIcon />}
          variant="ghost"
          size="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          _hover={{ color: "facebook.500" }}
          mr={4}
        />
        <IconButton
          aria-label="Twitter"
          icon={<AddIcon />}
          variant="ghost"
          size="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          _hover={{ color: "twitter.500" }}
          mr={4}
        />
        <IconButton
          aria-label="Instagram"
          icon={<WarningIcon />}
          variant="ghost"
          size="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          _hover={{ color: "pink.500" }}
          mr={4}
        />
        <IconButton
          aria-label="LINE"
          icon={<SettingsIcon />}
          variant="ghost"
          size="lg"
          color={useColorModeValue("gray.600", "gray.300")}
          _hover={{ color: "#00c300" }}
        />
      </Box>

    </Flex>
  );
}
