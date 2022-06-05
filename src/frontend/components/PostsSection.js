import { Flex } from "@chakra-ui/react";
import { Post } from "./Post";

const PostsSection = () => {
  return (
    <Flex direction="column-reverse">
      {[...Array(31).keys()].slice(1).map((post) => (
        <Post key={post} post={post} />
      ))}
    </Flex>
  );
};

export { PostsSection };
