import { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  HStack,
  Icon,
  Heading,
  Divider,
  BoxProps,
} from "@chakra-ui/react";

export const BasicBox = ({ children }: { children: ReactNode }) => {
  const bgBox = useColorModeValue("white", "gray.800");
  return (
    <Box bg={bgBox} boxShadow={"2xl"} rounded={"lg"} p={6}>
      {children}
    </Box>
  );
};

interface PagePrincipalProps extends BoxProps {
  children?: ReactNode;
  title: string;
  icon: any;
}

export const PagePrincipalBox = (props: PagePrincipalProps) => {
  const bgBox = useColorModeValue("white", "gray.900");
  return (
    <Box bg={bgBox} boxShadow={"2xl"} rounded={"lg"} p={6}>
      <HStack>
        <Icon
          as={props.icon}
          w={10}
          h={10}
          color={useColorModeValue("blue.600", "white")}
        />
        <Heading>{props.title}</Heading>
      </HStack>
      <Divider mb="3" mt="2" />
      {props.children}
    </Box>
  );
};
