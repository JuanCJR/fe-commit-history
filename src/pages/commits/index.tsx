import React, { useEffect, useState } from "react";
import {
  Box,
  createStandaloneToast,
  Text,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { FiGitCommit } from "react-icons/fi";

import { BasePage } from "../../components/BasePage";
import { BasicBox, PagePrincipalBox } from "../../components/CustomBox";

import { getCommits } from "../../api/commits";
import { useCommit } from "../../states/useCommit";
import { CommitItem } from "./componets/CommitItem";
export const Commits = () => {
  const { commit, setCommit } = useCommit();
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const { username, repoName } = useParams();
  const navigate = useNavigate();
  const toast = createStandaloneToast();

  useEffect(() => {
    async function loadData() {
      if (username && repoName) {
        const commits = await getCommits(username, repoName, 1, 40);
        if (commits.statusCode) {
          toast({
            title: commits.message,
            status: "warning",
            isClosable: true,
            position: "top",
          });
          navigate("/");
        } else {
          setCommit(commits);
          setOpen(true);
          setLoading(false);
        }
      } else {
        navigate("/");
      }
    }

    loadData();
  }, [toast, navigate, repoName, setCommit, username]);

  return (
    <BasePage isLoading={isLoading} isOpen={isOpen}>
      <PagePrincipalBox title="Commits History" icon={FaClock}>
        <BasicBox>
          <SimpleGrid h={"60vh"} column={1} spacing={2}>
            <Box
              overflow={{ base: "scroll", md: "auto" }}
              className="scroll"
              // boxShadow="base"
              rounded={"lg"}
              p={4}
            >
              <List spacing={3}>
                {commit.map((item) => (
                  <ListItem>
                    <Text>
                      <ListIcon as={FiGitCommit} />
                      Commits on {item.date}
                    </Text>
                    <List>
                      {item.commits.map((commit) => (
                        <CommitItem commit={commit} />
                      ))}
                    </List>
                  </ListItem>
                ))}
              </List>
            </Box>
          </SimpleGrid>
        </BasicBox>
      </PagePrincipalBox>
    </BasePage>
  );
};
