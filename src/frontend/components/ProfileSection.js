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
import { ShowListModal } from "./ShowListModal";

const ProfileSection = ({ profile }) => {
  const colorModeValue = useColorModeValue(true, false);

  const {
    isOpen: isOpenEditProfile,
    onOpen: onOpenEditProfile,
    onClose: onCloseEditProfile,
  } = useDisclosure();
  const initialRefEditProfile = useRef(null);

  const {
    isOpen: isOpenFollowing,
    onOpen: onOpenFollowing,
    onClose: onCloseFollowing,
  } = useDisclosure();

  const {
    isOpen: isOpenFollowers,
    onOpen: onOpenFollowers,
    onClose: onCloseFollowers,
  } = useDisclosure();

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
            <Button
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              onClick={onOpenEditProfile}
            >
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
        {website && (
          <Flex
            mt={"2"}
            alignItems={"center"}
            gap={"2"}
            fontSize={{ base: "sm" }}
            color={colorModeValue ? "blue.800" : "blue.300"}
          >
            <LinkIcon />
            <Link as={"a"} target="_blank" href={website}>
              {website.slice(8)}
            </Link>
          </Flex>
        )}

        <Flex gap={"2"}>
          <Flex
            gap={"1"}
            cursor={"pointer"}
            alignItems={"center"}
            borderBottomWidth={"2px"}
            borderBottomColor={"transparent"}
            _hover={{
              borderBottomColor: useColorModeValue("gray.400", "gray.500"),
            }}
            onClick={onOpenFollowing}
          >
            <Text fontWeight={"bold"}>{following.length}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Following
            </Text>
          </Flex>
          <Flex
            gap={"1"}
            cursor={"pointer"}
            alignItems={"center"}
            borderBottomWidth={"2px"}
            borderBottomColor={"transparent"}
            _hover={{
              borderBottomColor: useColorModeValue("gray.400", "gray.500"),
            }}
            onClick={onOpenFollowers}
          >
            <Text fontWeight={"bold"}>{followers.length}</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Followers
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <EditProfileModal
        isOpen={isOpenEditProfile}
        onClose={onCloseEditProfile}
        initialRef={initialRefEditProfile}
        profile={profile}
      />
      <ShowListModal
        isOpen={isOpenFollowing}
        onClose={onCloseFollowing}
        title={"Following"}
        list={following}
      />
      <ShowListModal
        isOpen={isOpenFollowers}
        onClose={onCloseFollowers}
        title={"Followers"}
        list={followers}
      />
    </Flex>
  );
};

export { ProfileSection };
