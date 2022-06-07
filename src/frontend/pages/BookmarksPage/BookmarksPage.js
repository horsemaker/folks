import {
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsSection, SuggestedProfiles } from "../../components";
import { getBookmarkPosts } from "../../features";

const BookmarksPage = () => {
  const toast = useToast();

  const { token } = useSelector((state) => state.auth);
  const {
    data: bookmarks,
    loading,
    error,
  } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkPosts(token));
  }, [dispatch, token]);

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

  return (
    <Flex gap={"12"} position={"relative"}>
      {bookmarks.length === 0 ? (
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
            No Bookmarks
          </Flex>
        )
      ) : (
        <PostsSection posts={bookmarks} />
      )}
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
