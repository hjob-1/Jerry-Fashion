"use client";
import React from "react";
import Image from "next/image";
import heroimg from "../../../assets/img/hero1.png";
import heroimg2 from "../../../assets/img/hero2.png";
import Button from "@/components/core/button/button";
import { Box, Flex, Text } from "@/components/core";
interface Props {}

const Hero = (props: Props) => {
  return (
    <Flex
      bg="green200"
      height="calc(100vh - 140px)"
      justifyContent="space-between"
      px="3xl"
    >
      <Box height="100%">
        <Image src={heroimg2} alt="hero image two" height="100%" />
      </Box>

      <Box position="absolute" left="7xl" top="7xl">
        <Text variant="h1" ml="md">
          Enhance
        </Text>
        <Text variant="h1" ml="15">
          Your Apprearance.
        </Text>

        <Button variant="outlined" mt="xl" ml="4xl">
          SHOP NOW
        </Button>
      </Box>
      <Box mr="3xl">
        <Image src={heroimg} alt="hero section image" />
      </Box>
    </Flex>
  );
};

export default Hero;
