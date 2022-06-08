import { Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";
import {
  MdBookmark,
  MdBookmarkBorder,
  MdDelete,
  MdEdit,
  MdMoreVert,
  MdOutlineInsertComment,
  MdOutlineThumbDown,
  MdOutlineThumbUp,
  MdThumbDown,
  MdThumbUp,
} from "react-icons/md";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  bookmarkPost,
  deletePost,
  dislikePost,
  editPost,
  likePost,
  removePostFromBookmark,
} from "../features";

const Post = ({ post }) => {
  const colorModeValue = useColorModeValue(true, false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const {
    _id,
    firstName,
    lastName,
    avatarURL,
    username,
    updatedAt,
    content,
    likes: { likedBy, dislikedBy },
    comments,
  } = post;

  const [postData, setPostData] = useState({ content });
  const [isEditing, setIsEditing] = useState(false);

  const { token, user } = useSelector((state) => state.auth);
  const { data: bookmarks } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const handleLikePost = () => {
    dispatch(likePost({ postId: _id, token }));
  };

  const handleDisikePost = () => {
    dispatch(dislikePost({ postId: _id, token }));
  };

  const handleBookmarkPost = () => {
    dispatch(bookmarkPost({ postId: _id, token }));
  };

  const handleRemovePostFromBookmark = () => {
    dispatch(removePostFromBookmark({ postId: _id, token }));
  };

  const handleEditPost = async () => {
    if (postData.content !== "") {
      setIsEditing(true);
      const response = await dispatch(
        editPost({ postId: _id, postData, token })
      );
      if (response?.payload?.posts !== undefined) {
        toast({
          title: "Post Edited!",
          description: "Your post has been edited successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
      setIsEditing(false);
    } else {
      toast({
        title: "Empty Post!",
        description: "Post can't be left empty.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeletePost = async () => {
    if (pathname === "/bookmarks") {
      dispatch(removePostFromBookmark({ postId: _id, token }));
    }
    const response = await dispatch(deletePost({ postId: _id, token }));
    if (response?.payload?.posts !== undefined) {
      toast({
        title: "Post Deleted!",
        description: "Your post has been deleted successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      cursor={"pointer"}
      gap={"2"}
      px={{ base: "1", md: "4" }}
      py={"6"}
      borderTopWidth={"1px"}
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Avatar
        name={`${firstName} ${lastName}`}
        src={avatarURL}
        alt={username}
        as={Link}
        to={`/profile/${username}`}
      />
      <Flex flexGrow={"1"} direction={"column"} gap={"1"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"} justifyContent={"space-between"}>
            <Flex direction={"column"} as={Link} to={`/profile/${username}`}>
              <Text
                fontWeight={600}
                _hover={{ textDecoration: "underline" }}
              >{`${firstName} ${lastName}`}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                @{username}
              </Text>
            </Flex>
            <Icon fontSize={"6"} color={"gray.500"} as={FaCircle} />
            <Text fontSize={"sm"} color={"gray.500"}>
              <Moment fromNow>{updatedAt}</Moment>
            </Text>
          </Flex>
          {user.username === username && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<MdMoreVert />}
                variant={"ghost"}
                rounded={"full"}
              />
              <MenuList
                bg={colorModeValue ? "white" : "gray.900"}
                borderColor={colorModeValue ? "gray.200" : "gray.700"}
              >
                <MenuItem icon={<MdEdit />} onClick={onOpen}>
                  Edit Post
                </MenuItem>
                <MenuItem icon={<MdDelete />} onClick={handleDeletePost}>
                  Delete Post
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Text>{content}</Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"2"}
          mr={"3"}
        >
          <Flex
            alignItems={"center"}
            gap={"1"}
            color={"gray.500"}
            _hover={{ color: colorModeValue ? "green.500" : "green.200" }}
          >
            {likedBy.find(({ username }) => username === user.username) ? (
              <Icon fontSize={"20"} as={MdThumbUp} />
            ) : (
              <Icon
                fontSize={"20"}
                as={MdOutlineThumbUp}
                onClick={handleLikePost}
              />
            )}
            <Text fontSize={"smaller"}>
              {likedBy.length !== 0 && likedBy.length}
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            gap={"1"}
            color={"gray.500"}
            _hover={{ color: colorModeValue ? "red.500" : "red.200" }}
          >
            {dislikedBy.find(({ username }) => username === user.username) ? (
              <Icon fontSize={"20"} as={MdThumbDown} />
            ) : (
              <Icon
                fontSize={"20"}
                as={MdOutlineThumbDown}
                onClick={handleDisikePost}
              />
            )}
            <Text fontSize={"smaller"}>
              {dislikedBy.length !== 0 && dislikedBy.length}
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={"1"} color={"gray.500"}>
            <Icon fontSize={"20"} as={MdOutlineInsertComment} />
            <Text fontSize={"smaller"}>
              {comments.length !== 0 && comments.length}
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            gap={"1"}
            color={"gray.500"}
            _hover={{ color: colorModeValue ? "purple.500" : "purple.300" }}
          >
            {bookmarks.find((post) => post._id === _id) ? (
              <Icon
                fontSize={"20"}
                as={MdBookmark}
                onClick={handleRemovePostFromBookmark}
              />
            ) : (
              <Icon
                fontSize={"20"}
                as={MdBookmarkBorder}
                onClick={handleBookmarkPost}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        isCentered
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent bg={useColorModeValue("white", "gray.900")}>
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
                placeContent={"What's happening?"}
                value={postData.content}
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
        </ModalContent>
      </Modal>
      {/* Modal */}
    </Flex>
  );
};

export { Post };
