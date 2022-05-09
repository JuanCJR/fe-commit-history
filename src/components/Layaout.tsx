import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

type Props = {
  children?: JSX.Element;
};

export const Layaout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      minH={"100vh"}
      // bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Navbar />
      <Box ml={{ base: 5 }} mt={{ base: 5 }}>
        {children}
      </Box>
    </Box>
  );
};
