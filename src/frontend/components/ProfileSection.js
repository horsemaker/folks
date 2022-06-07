import { LinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ProfileSection = ({ profile }) => {
  const {
    firstName,
    lastName,
    avatarURL,
    username,
    bio,
    website,
    following,
    followers,
  } = profile;

  const { user } = useSelector((state) => state.auth);

  return (
    <Flex
      gap={{ base: "2", sm: "6" }}
      px={{ base: "1", md: "4" }}
      pt={"6"}
      pb={"2"}
    >
      <Image
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
            <Button px={4} fontSize={"sm"} rounded={"full"}>
              Edit
            </Button>
          ) : (
            <Button px={4} fontSize={"sm"} rounded={"full"}>
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
    </Flex>
  );
};

export { ProfileSection };
