import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { PostsSection, SuggestedProfiles } from "../../components";

const BookmarksPage = () => {
  return (
    <Flex gap={"12"} position={"relative"}>
      <PostsSection />
      <Flex
        display={{ base: "none", lg: "flex" }}
        position={"sticky"}
        top={"24"}
        mt={"4"}
        direction="column"
        gap={"4"}
        alignSelf={"start"}
        p={4}
        rounded={"lg"}
        minW={{ base: "52", lg: "72", xl: "80" }}
        bgColor={useColorModeValue("gray.100", "gray.800")}
      >
        <Heading fontSize={"2xl"}>Suggested</Heading>
        <SuggestedProfiles />
      </Flex>
    </Flex>
  );
};

export { BookmarksPage };
