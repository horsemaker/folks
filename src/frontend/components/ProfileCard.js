import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

const ProfileCard = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex gap={2}>
        <Avatar
          name="Yash Ghodekar"
          src={"https://avatars.githubusercontent.com/u/60985700?v=4"}
          alt={"Author"}
        />
        <Flex direction={"column"} fontSize={"sm"}>
          <Text fontWeight={600}>Yash Ghodekar</Text>
          <Text color={"gray.500"}>@horsemaker</Text>
        </Flex>
      </Flex>
      <Button px={4} fontSize={"sm"} rounded={"full"}>
        Follow
      </Button>
    </Flex>
  );
};

export { ProfileCard };
