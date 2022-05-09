import { Box, useColorModeValue, Spinner, Center } from "@chakra-ui/react";
export const LoadingPage = () => {
  return (
    <Box mt={{ base: 40 }}>
      <Center>
        <Spinner
          w={{ base: 20, md: 40 }}
          h={{ base: 20, md: 40 }}
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.400"
          color={useColorModeValue("black", "white")}
        />
      </Center>
    </Box>
  );
};
