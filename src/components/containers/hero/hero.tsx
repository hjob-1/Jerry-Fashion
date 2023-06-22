"use client";
import React from "react";
import Image from "next/image";
import heroimg from "../../../assets/img/hero1.png";
import Button from "@/components/core/button/button";
import { Box, Flex, Text } from "@/components/core";
interface Props {}

const Hero = (props: Props) => {
  return (
    <Flex bg="pallete.10" height="80vh">
      <Box>
        <Text variant="h1">Enhance</Text>
        <Text variant="h1" fontSize="8xl" ml="9">
          Your Apprearance.
        </Text>
        <Button variant="outlined">SHOP NOW</Button>
      </Box>
      <Box>
        <Box border="2px solid red">
          <Image
            src={heroimg}
            alt="hero section image"
            width="800"
            height="800"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Hero;
