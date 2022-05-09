import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  createStandaloneToast,
  Th,
  Thead,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import { BasePage } from "../../components/BasePage";
import { BasicBox, PagePrincipalBox } from "../../components/CustomBox";

import { getRepositories } from "../../api/repositories";
import { useRepository } from "../../states/useRepository";

export const Repositories = () => {
  const { repository, setRepository } = useRepository();
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const { username } = useParams();
  const navigate = useNavigate();
  const toast = createStandaloneToast();

  useEffect(() => {
    async function loadData() {
      if (username) {
        const repositories = await getRepositories(username, 1, 40);
        if (repositories.statusCode) {
          toast({
            title: repositories.message,
            status: "warning",
            isClosable: true,
            position: "top",
          });
          navigate("/");
        } else {
          setRepository(repositories);
          setOpen(true);
          setLoading(false);
        }
      } else {
        navigate("/");
      }
    }
    loadData();
  }, [navigate, setRepository, toast, username]);

  return (
    <BasePage isLoading={isLoading} isOpen={isOpen}>
      <PagePrincipalBox title="Repository List" icon={FaBook}>
        <BasicBox>
          <SimpleGrid h={"60vh"} column={1} spacing={2}>
            <Box
              overflow={{ base: "scroll", md: "auto" }}
              className="scroll"
              boxShadow="base"
              rounded={"lg"}
              p={4}
            >
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {repository.map((item) => (
                    <Tr
                      onClick={() =>
                        navigate(`/commits/${username}/${item.name}`)
                      }
                      key={item.id}
                      cursor="pointer"
                      _hover={{ bg: "blue.600", color: "white" }}
                    >
                      <Td>{item.name}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </SimpleGrid>
        </BasicBox>
      </PagePrincipalBox>
    </BasePage>
  );
};
