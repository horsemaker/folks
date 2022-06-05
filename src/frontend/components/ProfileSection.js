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

const ProfileSection = () => {
  return (
    <Flex
      gap={{ base: "2", sm: "6" }}
      px={{ base: "1", md: "4" }}
      pt={"6"}
      pb={"2"}
    >
      <Image
        name="Yash Ghodekar"
        boxSize={{
          base: "75px",
          xl: "150px",
        }}
        src={"https://avatars.githubusercontent.com/u/60985700?v=4"}
        alt={"Author"}
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
              Yash Ghodekar
            </Heading>
            <Text fontSize={"md"} color={"gray.500"}>
              @horsemaker
            </Text>
          </Flex>
          <Button px={4} fontSize={"sm"} rounded={"full"}>
            Edit
          </Button>
        </Flex>
        <Text fontSize={{ base: "lg", md: "xl" }}>because, why not? 🦄</Text>
        <Flex
        mt={"2"}
          alignItems={"center"}
          gap={"2"}
          fontSize={{ base: "sm" }}
          color={useColorModeValue("blue.800", "blue.300")}
        >
          <LinkIcon />
          <Link as={"a"} target="_blank" href="https://peerlist.io/horsemaker">
            peerlist.io/horsemaker
          </Link>
        </Flex>
        <Flex gap={"2"}>
          <Flex gap={"1"} alignItems={"center"}>
            <Text fontWeight={"bold"}>100</Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Following
            </Text>
          </Flex>
          <Flex gap={"1"} alignItems={"center"}>
            <Text fontWeight={"bold"}>100</Text>
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
