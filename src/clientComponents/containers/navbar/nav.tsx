"use client";
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { links } from "./data.link";

interface Props {}

const Nav = (props: Props) => {
  return (
    <Box>
      <Text bg="pallete.200" py="1" textAlign="center" fontSize="sm">
        Special Discount for Familys and couples orders
      </Text>
      <Flex justifyContent="space-between" px="28" py="2.5">
        <Text>Logo</Text>
        <Box>
          {links.map((link) => (
            <Link key={link.name} href={link.to} mr="5" textDecoration="none">
              {link.name}
            </Link>
          ))}
        </Box>
        <Text>Icons</Text>
      </Flex>
    </Box>
  );
};

export default Nav;
