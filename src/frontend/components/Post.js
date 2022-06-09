import { Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  bookmarkPost,
  deletePost,
  dislikePost,
  editPost,
  likePost,
  removePostFromBookmark,
} from "../features";
import { EditPostModal } from "./EditPostModal";

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
  const navigate = useNavigate();

  const handleLikePost = (e) => {
    e.stopPropagation();
    dispatch(likePost({ postId: _id, token }));
  };

  const handleDisikePost = (e) => {
    e.stopPropagation();
    dispatch(dislikePost({ postId: _id, token }));
  };

  const handleBookmarkPost = (e) => {
    e.stopPropagation();
    dispatch(bookmarkPost({ postId: _id, token }));
  };

  const handleRemovePostFromBookmark = (e) => {
    e.stopPropagation();
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
      onClick={() => navigate(`/post/${_id}`)}
    >
      <Avatar
        name={`${firstName} ${lastName}`}
        src={avatarURL}
        alt={username}
        as={Link}
        to={`/profile/${username}`}
        onClick={(e) => e.stopPropagation()}
      />
      <Flex flexGrow={"1"} direction={"column"} gap={"1"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"} justifyContent={"space-between"}>
            <Flex
              direction={"column"}
              as={Link}
              to={`/profile/${username}`}
              onClick={(e) => e.stopPropagation()}
            >
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
                onClick={(e) => e.stopPropagation()}
              />
              <MenuList
                bg={colorModeValue ? "white" : "gray.900"}
                borderColor={colorModeValue ? "gray.200" : "gray.700"}
                onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
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
      <EditPostModal
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        firstName={firstName}
        lastName={lastName}
        avatarURL={avatarURL}
        username={username}
        content={content}
        setPostData={setPostData}
        postData={postData}
        isEditing={isEditing}
        handleEditPost={handleEditPost}
      />
    </Flex>
  );
};

export { Post };
