import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";

const FullScreenSection = ({ children, id, isDarkBackground, ...boxProps }) => {
  return (
    <Box bg={boxProps.bg} minHeight="100vh" overflowY="auto"  align="center" justify="center"    id={id}     >
      <VStack     align="center" justify="center" pt="0" height="100%"
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
      >
        <VStack   {...boxProps}  >
          {children}
        </VStack>
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
