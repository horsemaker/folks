import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../features";

const ProfileCard = ({ user }) => {
  const { _id, firstName, lastName, avatarURL, username } = user;

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleFollowUser = () => {
    dispatch(followUser({ followUserId: _id, token }));
  };

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
      <Button
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        onClick={handleFollowUser}
      >
        Follow
      </Button>
    </Flex>
  );
};

export { ProfileCard };
