import { Avatar, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreatePost = () => {
  const { avatarURL, firstName, lastName, username } = useSelector(
    (state) => state.auth.user
  );

  return (
    <Flex
      width={"full"}
      direction={"column"}
      gap={"2"}
      px={{ base: "1", md: "4" }}
      py={"6"}
    >
      <Flex gap={2}>
        <Avatar
          as={Link}
          to={`/profile/${username}`}
          name={`${firstName} ${lastName}`}
          src={avatarURL}
          alt={username}
        />
        <Flex
          direction={"column"}
          fontSize={"sm"}
          as={Link}
          to={`/profile/${username}`}
        >
          <Text fontWeight={600}>{`${firstName} ${lastName}`}</Text>
          <Text color={"gray.500"}>@{username}</Text>
        </Flex>
      </Flex>
      <Textarea
        w="full"
        h={{ base: 24, md: 28 }}
        border="none"
        outline="none"
        resize="vertical"
        focusBorderColor="transparent"
        placeholder="What's happening?"
      />
      <Button alignSelf={"flex-end"} colorScheme="purple">
        Post
      </Button>
    </Flex>
  );
};

export { CreatePost };
