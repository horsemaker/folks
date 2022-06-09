import { LinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../features";
import { EditProfileModal } from "./EditProfileModal";

const ProfileSection = ({ profile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const {
    _id,
    firstName,
    lastName,
    avatarURL,
    username,
    bio,
    website,
    following,
    followers,
  } = profile;

  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleFollowUser = () => {
    dispatch(followUser({ followUserId: _id, token }));
  };

  const handleUnfollowUser = () => {
    dispatch(unfollowUser({ followUserId: _id, token }));
  };

  return (
    <Flex
      gap={{ base: "2", sm: "6" }}
      px={{ base: "1", md: "4" }}
      pt={"6"}
      pb={"2"}
    >
      <Avatar
        name={`${firstName} ${lastName}`}
        rounded={"full"}
        boxSize={{
          base: "75px",
          xl: "150px",
        }}
        src={avatarURL}
        alt={username}
      />
      <Flex
        py={{ base: "0", xl: "2" }}
        direction={"column"}
        gap={"1"}
        width={"full"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex direction={"column"}>
            <Heading fontSize={{ base: "2xl", xl: "3xl" }}>
              {`${firstName} ${lastName}`}
            </Heading>
            <Text fontSize={"md"} color={"gray.500"}>
              @{username}
            </Text>
          </Flex>
          {user.username === username ? (
            <Button px={4} fontSize={"sm"} rounded={"full"} onClick={onOpen}>
              Edit
            </Button>
          ) : user.following.find((user) => user.username === username) ? (
            <Button
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              onClick={handleUnfollowUser}
            >
              Following
            </Button>
          ) : (
            <Button
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              onClick={handleFollowUser}
            >
              Follow
            </Button>
          )}
        </Flex>
        <Text fontSize={{ base: "lg", md: "xl" }}>{bio}</Text>
        <Flex
          mt={"2"}
          alignItems={"center"}
          gap={"2"}
          fontSize={{ base: "sm" }}
          color={useColorModeValue("blue.800", "blue.300")}
        >
          <LinkIcon />
          <Link as={"a"} target="_blank" href={website}>
            {website.slice(8)}
          </Link>
        </Flex>
        <Flex gap={"2"}>
          <Flex gap={"1"} alignItems={"center"}>
            <Text fontWeight={"bold"}>{following.length}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Following
            </Text>
          </Flex>
          <Flex gap={"1"} alignItems={"center"}>
            <Text fontWeight={"bold"}>{followers.length}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <EditProfileModal
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        profile={profile}
      />
    </Flex>
  );
};

export { ProfileSection };
