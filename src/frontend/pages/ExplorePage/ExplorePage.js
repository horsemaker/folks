import {
  Box,
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  FiltersSection,
  PostsSection,
  SuggestedProfiles,
} from "../../components";
import { giveExplorePosts } from "../../utils";

const ExplorePage = () => {
  const toast = useToast();

  const { data: posts, loading, error } = useSelector((state) => state.posts);
  const { show } = useSelector((state) => state.filters);

  useEffect(() => {
    if (error !== "") {
      toast({
        title: error.title,
        description: error.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  const explorePosts = giveExplorePosts(posts, show);

  return (
    <Flex gap={"12"} position={"relative"}>
      <Flex flexGrow={"1"} direction={"column"} gap={"4"}>
        <Box display={{ base: "block", lg: "none" }} mt={"2"}>
          <FiltersSection />
        </Box>
        {posts.length === 0 ? (
          loading ? (
            <Flex
              direction={"column"}
              flexGrow={"1"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="purple.500"
                size="xl"
              />
            </Flex>
          ) : (
            <Flex
              direction={"column"}
              flexGrow={"1"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              No Posts Found
            </Flex>
          )
        ) : (
          <PostsSection posts={explorePosts} />
        )}
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
        <FiltersSection />
        <Heading fontSize={"2xl"}>Suggested</Heading>
        <SuggestedProfiles />
      </Flex>
    </Flex>
  );
};

export { ExplorePage };
