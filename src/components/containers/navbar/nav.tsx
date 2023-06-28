"use client";
import React from "react";
import { links } from "./data.link";
import { Navigate } from "@/components/core/link/link";
import { Box, Flex, Text } from "@/components/core";

interface Props {}

const Nav = (props: Props) => {
  return (
    <Box>
      <Text bg="green900" py="xs" fontSize="sm" textAlign="center">
        Special Discount for Familys and couples orders
      </Text>
      <Flex
        justifyContent="space-between"
        px="6xl"
        height="8"
        alignItems="center"
      >
        <Text>Logo</Text>
        <Box>
          {links.map((link) => (
            <Navigate
              key={link.name}
              href={link.to}
              mr="16"
              textDecoration="none"
              fontSize="lg"
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
