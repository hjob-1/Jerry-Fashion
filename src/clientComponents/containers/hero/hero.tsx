"use-client";
import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import Button from "@/clientComponents/components/core/button/button";
interface Props {}

const Hero = (props: Props) => {
  return (
    <Flex bg="pallete.50" height="80vh">
      <Box>
        <Heading as="h1" size="3xl">
          Enhance
        </Heading>
        <Heading as="h1" size="3xl" ml="9">
          Your Apprearance.
        </Heading>
        <Button variant="outlined">SHOP NOW</Button>
      </Box>
    </Flex>
  );
};

export default Hero;
