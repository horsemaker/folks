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
} from "@chakra-ui/react";

const EditPostContent = ({
  firstName,
  lastName,
  avatarURL,
  username,
  initialRef,
  content,
  setPostData,
  postData,
  onClose,
  isEditing,
  handleEditPost,
}) => {
  return (
    <>
      <ModalHeader>Editing Post</ModalHeader>
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
            ref={initialRef}
            placeholder={"What's happening?"}
            defaultValue={content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
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
            onClick={handleEditPost}
          >
            Save
          </Button>
        </Flex>
      </ModalFooter>
    </>
  );
};

export { EditPostContent };
