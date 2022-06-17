import {
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  PostsSection,
  ProfileSection,
  SuggestedProfiles,
} from "../../components";
import { getAllUserPosts, getUser, userCleanup } from "../../features";

const ProfilePage = () => {
  const toast = useToast();

  const { username } = useParams();

  const {
    profile: {
      data: userProfile,
      loading: profileLoading,
      error: profileError,
    },
    posts: { data: userPosts, loading: postsLoading, error: postsError },
  } = useSelector((state) => state.user);
  const { data: users } = useSelector((state) => state.users);
  const { data: posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(userCleanup());
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username, users]);

  useEffect(() => {
    dispatch(getAllUserPosts(username));
  }, [dispatch, username, posts]);

  useEffect(() => {
    if (profileError !== "") {
      toast({
        title: profileError.title,
        description: profileError.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [profileError, toast]);

  useEffect(() => {
    if (postsError !== "") {
      toast({
        title: postsError.title,
        description: postsError.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [postsError, toast]);

  return (
    <Flex gap={"12"} position={"relative"}>
      {userProfile === null ? (
        profileLoading ? (
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
            "User Not Found"
          </Flex>
        )
      ) : (
        <Flex direction={"column"} flexGrow={"1"} gap={"4"}>
          <ProfileSection profile={userProfile} />
          {userPosts === null ? (
            postsLoading ? (
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
                "Posts Not Found"
              </Flex>
            )
          ) : (
            <PostsSection posts={userPosts} />
          )}
        </Flex>
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

export { ProfilePage };
