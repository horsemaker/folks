import { Flex, Heading, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CommentsSection, Post, SuggestedProfiles } from "../../components";
import { getPost, postCleanup } from "../../features";

const SinglePostPage = () => {
  const { postId } = useParams();

  const { data: post, loading: postLoading } = useSelector(
    (state) => state.post
  );
  const { data: posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId, posts]);

  useEffect(() => {
    return () => dispatch(postCleanup());
  }, [dispatch, postId]);

  return (
    <Flex gap={"12"} position={"relative"}>
      <Flex flexGrow={"1"} direction={"column"} gap={"4"}>
        {post === null ? (
          postLoading ? (
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
              No Post Found!
            </Flex>
          )
        ) : (
          <>
            <Post post={post} />
            <CommentsSection postId={postId} comments={post.comments} />
          </>
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
        <Heading fontSize={"2xl"}>Suggested</Heading>
        <SuggestedProfiles />
      </Flex>
    </Flex>
  );
};

export { SinglePostPage };
