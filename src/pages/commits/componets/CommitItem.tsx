import { Box, HStack, Text, Divider, ListItem, Avatar } from "@chakra-ui/react";
import { CommitInfo } from "../../../interfaces/commit";
import { format } from "timeago.js";

interface CommitItemProps {
  commit: CommitInfo;
}
export const CommitItem = (props: CommitItemProps) => {
  const { commit } = props;

  const date = new Date(commit.commit.committer.date);

  return (
    <ListItem>
      <HStack mb={4}>
        <Avatar
          name={commit.commit.committer.name}
          size="sm"
          bg={"gray.300"}
          //   src="https://avatars.githubusercontent.com/u/47450948?v=4"
        />
        <Box>
          <Text fontSize="md" fontWeight={"bold"}>
            {commit.commit.message}
          </Text>
          <Text fontSize="xs">
            <strong>{commit.commit.committer.name}</strong> committed{" "}
            {format(date, "en_US")}
          </Text>
        </Box>
      </HStack>
      <Divider />
    </ListItem>
  );
};
