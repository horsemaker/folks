import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  PostsSection,
  ProfileSection,
  SuggestedProfiles,
} from "../../components";

const ProfilePage = () => {
  return (
    <Flex gap={"12"} position={"relative"}>
      <Flex direction={"column"} gap={"4"}>
        <ProfileSection />
        <PostsSection />
      </Flex>
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

export { ProfilePage };
