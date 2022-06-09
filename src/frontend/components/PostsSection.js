import { Flex } from "@chakra-ui/react";
import { Post } from "./Post";

const PostsSection = ({ posts }) => {
  return (
    <Flex flexGrow={"1"} direction="column" justifyContent={"start"}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Flex>
  );
};

export { PostsSection };
