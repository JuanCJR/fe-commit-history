import {
  Box,
  FormControl,
  HStack,
  Input,
  useColorModeValue,
  IconButton,
  createStandaloneToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getUser } from "../../../api/user";
import { handleChangeValue } from "../../../common/inputHandlers";
export const Search = () => {
  const [search, setSearch] = useState<{
    username: string;
    isLoading: boolean;
  }>({ username: "", isLoading: false });

  const navigate = useNavigate();
  const toast = createStandaloneToast();

  const handleLoading = (loading: boolean) => {
    setSearch((state) => ({ ...state, isLoading: loading }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleLoading(true);

    const user = await getUser(search.username);
    handleLoading(false);
    console.log(user);

    if (user.statusCode) {
      toast({
        title: user.message,
        status: "warning",
        isClosable: true,
        position: "top",
      });
    } else {
      navigate(`/repositories/${user.login}`);
    }
  };
  return (
    <Box
      boxShadow="2x1"
      rounded={"lg"}
      p={5}
      bg={useColorModeValue("white", "gray.900")}
    >
      <form onSubmit={handleSubmit}>
        <HStack spacing={{ base: "1", md: "3" }} as={Box}>
          <FormControl>
            <Input
              required
              type={"text"}
              placeholder="Enter a github account name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeValue(e, "username", setSearch)
              }
            />
          </FormControl>

          <IconButton
            isLoading={search.isLoading}
            type="submit"
            aria-label="Search"
            icon={<FaSearch />}
          />
        </HStack>
      </form>
    </Box>
  );
};
