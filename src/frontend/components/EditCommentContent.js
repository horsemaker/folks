import {
  Avatar,
  Button,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostComment } from "../features";

const EditCommentContent = ({ onClose, initialRef, postId, comment }) => {
  const toast = useToast();

  const { _id, firstName, lastName, avatarURL, username, text } = comment;

  const [commentData, setCommentData] = useState({
    text,
  });
  const [isEditing, setIsEditing] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleEditPostComment = async () => {
    if (commentData.text !== "") {
      setIsEditing(true);
      const response = await dispatch(
        editPostComment({ postId, commentId: _id, commentData, token })
      );
      if (response?.payload?.posts) {
        toast({
          title: "Comment Edited!",
          description: "Your comment has been edited succesfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      setIsEditing(false);
      onClose();
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
    <Flex direction={"column"}>
      <ModalHeader>Editing Comment</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex direction={"column"} gap={"3"}>
          <Flex gap={2}>
            <Avatar
              name={`${firstName} ${lastName}`}
              src={avatarURL}
              alt={username}
            />
            <Flex direction={"column"} fontSize={"sm"}>
              <Text fontWeight={600}>{`${firstName} ${lastName}`}</Text>
              <Text color={"gray.500"}>@{username}</Text>
            </Flex>
          </Flex>
          <Textarea
            id={"comment"}
            ref={initialRef}
            placeholder={"Add a comment..."}
            defaultValue={text}
            autoFocus
            onChange={(e) =>
              setCommentData({ ...commentData, text: e.target.value })
            }
            onFocus={(e) => {
              const val = e.target.value;
              e.target.value = "";
              e.target.value = val;
            }}
          />
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Flex gap={"2"}>
          <Button colorScheme={"purple"} variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            isLoading={isEditing}
            colorScheme={"purple"}
            mr={3}
            onClick={handleEditPostComment}
          >
            Save
          </Button>
        </Flex>
      </ModalFooter>
    </Flex>
  );
};

export { EditCommentContent };
