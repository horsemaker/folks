import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostComment } from "../features";
import { Comment } from "./Comment";

const CommentsSection = ({ postId, comments }) => {
  const toast = useToast();

  const [commentData, setCommentData] = useState({ text: "" });
  const [isCommenting, setIsCommenting] = useState(false);

  const {
    token,
    user: { firstName, lastName, username, avatarURL },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleAddComment = async () => {
    if (commentData.text !== "") {
      setIsCommenting(true);
      const response = await dispatch(
        addPostComment({
          postId,
          commentData: {
            firstName,
            lastName,
            username,
            avatarURL,
            text: commentData.text,
          },
          token,
        })
      );
      setIsCommenting(false);
      if (response?.payload?.posts) {
        toast({
          title: "Comment posted!",
          description: "Your comment was posted successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setCommentData({ ...commentData, text: "" });
      }
    } else {
      toast({
        title: "Empty Comment!",
        description: "Comment can't be left empty.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction={"column"} px={{ base: "1", md: "4" }}>
      <Flex gap={"2"}>
        <Input
          type={"text"}
          placeholder={"Add a comment..."}
          autoFocus
          value={commentData.text}
          onChange={(e) =>
            setCommentData({ ...commentData, text: e.target.value })
          }
        />
        <Button
          isLoading={isCommenting}
          colorScheme={"purple"}
          onClick={handleAddComment}
        >
          Comment
        </Button>
      </Flex>
      <Flex direction={"column"}>
        {comments.map((comment) => (
          <Comment key={comment._id} postId={postId} comment={comment} />
        ))}
      </Flex>
    </Flex>
  );
};

export { CommentsSection };
