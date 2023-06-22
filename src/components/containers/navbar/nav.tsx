"use client";
import React from "react";
import { links } from "./data.link";
import { Navigate } from "@/components/core/link/link";
import { Box, Flex, Text } from "@/components/core";

interface Props {}

const Nav = (props: Props) => {
  return (
    <Box>
      <Text bg="pallete.20" py="1" fontSize="sm" textAlign="center">
        Special Discount for Familys and couples orders
      </Text>
      <Flex justifyContent="flex-end" px="28" py="5" border="2px solid red">
        <Text>Logo</Text>
        <Box>
          {links.map((link) => (
            <Navigate
              key={link.name}
              href={link.to}
              mr="5"
              textDecoration="none"
            >
              {link.name}
            </Navigate>
          ))}
        </Box>
        <Text>Icons</Text>
      </Flex>
    </Box>
  );
};

export default Nav;
