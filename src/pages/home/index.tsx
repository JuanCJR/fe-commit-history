import {
  Container,
  Stack,
  Box,
  Text,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { Search } from "./componenets/Search";

export const Home = () => {
  const textStyle = useColorModeValue("black", "white");

  return (
    <Container maxW={"3x1"}>
      <Stack
        boxShadow={"base"}
        rounded={"lg"}
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        p={{ base: 10, md: 20 }}
        pb={{ base: 80, md: 80 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={textStyle}>
            Search GitHub account
          </Text>
        </Heading>
        <Search />
      </Stack>
    </Container>
  );
};
