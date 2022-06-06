import { Avatar, Button, Flex, Text, Textarea } from "@chakra-ui/react";

const CreatePost = () => {
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
          name="Yash Ghodekar"
          src={"https://avatars.githubusercontent.com/u/60985700?v=4"}
          alt={"Author"}
        />
        <Flex direction={"column"} fontSize={"sm"}>
          <Text fontWeight={600}>Yash Ghodekar</Text>
          <Text color={"gray.500"}>@horsemaker</Text>
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
