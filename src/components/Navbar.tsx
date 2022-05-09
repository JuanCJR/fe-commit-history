import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box bg={useColorModeValue("blue.600", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <IconButton
            size="sm"
            fontSize="xl"
            variant="ghost"
            color="current"
            marginLeft="2"
            icon={<FaHome />}
            aria-label="homek"
            onClick={() => navigate("/")}
          />
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <ColorModeSwitcher />

            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu> */}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
