import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
  const { firstName, lastName, avatarURL, username } = user;

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex gap={2}>
        <Avatar
          name={`${firstName} ${lastName}`}
          src={avatarURL}
          alt={username}
          as={Link}
          to={`/profile/${username}`}
        />
        <Flex
          direction={"column"}
          fontSize={"sm"}
          as={Link}
          to={`/profile/${username}`}
        >
          <Text
            fontWeight={600}
            _hover={{ textDecoration: "underline" }}
          >{`${firstName} ${lastName}`}</Text>
          <Text color={"gray.500"}>@{username}</Text>
        </Flex>
      </Flex>
      <Button px={4} fontSize={"sm"} rounded={"full"}>
        Follow
      </Button>
    </Flex>
  );
};

export { ProfileCard };
