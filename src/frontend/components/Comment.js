import {
  Avatar,
  Box,
  Flex,
  Icon,
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
import { useRef } from "react";
import {
  BsArrowDownCircle,
  BsArrowDownCircleFill,
  BsArrowUpCircle,
  BsArrowUpCircleFill,
} from "react-icons/bs";
import { MdEdit, MdDelete, MdMoreVert } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePostComment,
  downvotePostComment,
  upvotePostComment,
} from "../features";
import { EditCommentModal } from "./EditCommentModal";
import { ShowListModal } from "./ShowListModal";

const Comment = ({ postId, comment }) => {
  const colorModeValue = useColorModeValue(true, false);
  const toast = useToast();
  const {
    isOpen: isOpenEditComment,
    onOpen: onOpenEditComment,
    onClose: onCloseEditComment,
  } = useDisclosure();
  const initialRefEditComment = useRef(null);
  const {
    isOpen: isOpenUpvotedBy,
    onOpen: onOpenUpvotedBy,
    onClose: onCloseUpvotedBy,
  } = useDisclosure();

  const {
    _id,
    firstName,
    lastName,
    avatarURL,
    username,
    text,
    votes: { upvotedBy, downvotedBy },
  } = comment;

  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleUpvotePostComment = () => {
    dispatch(upvotePostComment({ postId, commentId: _id, token }));
  };

  const handleDownvotePostComment = () => {
    dispatch(downvotePostComment({ postId, commentId: _id, token }));
  };

  const handleDeletePostComment = async () => {
    const response = await dispatch(
      deletePostComment({ postId, commentId: _id, token })
    );
    if (response?.payload?.posts !== undefined) {
      toast({
        title: "Comment Deleted!",
        description: "Your comment has been deleted successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      py={"6"}
      gap={"2"}
      borderBottomWidth={"1px"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
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
                <MenuItem icon={<MdEdit />} onClick={onOpenEditComment}>
                  Edit Comment
                </MenuItem>
                <MenuItem icon={<MdDelete />} onClick={handleDeletePostComment}>
                  Delete Comment
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Text>{text}</Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"2"}
          mr={"3"}
        >
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            gap={"1"}
            color={"gray.500"}
            _hover={{ color: colorModeValue ? "green.500" : "green.200" }}
          >
            {upvotedBy.find(({ username }) => user.username === username) ? (
              <Icon fontSize={"18"} as={BsArrowUpCircleFill} />
            ) : (
              <Icon
                fontSize={"18"}
                as={BsArrowUpCircle}
                onClick={handleUpvotePostComment}
              />
            )}
            <Text fontSize={"smaller"}>
              {upvotedBy.length !== 0 && upvotedBy.length}
            </Text>
          </Flex>
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            gap={"1"}
            color={"gray.500"}
            _hover={{ color: colorModeValue ? "red.500" : "red.200" }}
          >
            {downvotedBy.find(({ username }) => user.username === username) ? (
              <Icon fontSize={"18"} as={BsArrowDownCircleFill} />
            ) : (
              <Icon
                fontSize={"18"}
                as={BsArrowDownCircle}
                onClick={handleDownvotePostComment}
              />
            )}
            <Text fontSize={"smaller"}>
              {downvotedBy.length !== 0 && downvotedBy.length}
            </Text>
          </Flex>
          <Box></Box>
          <Box></Box>
        </Flex>
        {upvotedBy.length !== 0 &&
          (upvotedBy.length > 1 ? (
            <Text
              cursor={"pointer"}
              fontSize={"sm"}
              _hover={{
                textDecoration: "underline",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onOpenUpvotedBy();
              }}
            >
              Upvoted by {`${upvotedBy[0].firstName} ${upvotedBy[0].lastName}`}{" "}
              and {upvotedBy.length - 1} others
            </Text>
          ) : (
            <Text
              cursor={"pointer"}
              fontSize={"sm"}
              _hover={{ textDecoration: "underline" }}
              onClick={(e) => {
                e.stopPropagation();
                onOpenUpvotedBy();
              }}
            >
              Upvoted by {`${upvotedBy[0].firstName} ${upvotedBy[0].lastName}`}
            </Text>
          ))}
      </Flex>
      <EditCommentModal
        isOpen={isOpenEditComment}
        onClose={onCloseEditComment}
        initialRef={initialRefEditComment}
        postId={postId}
        comment={comment}
      />
      <ShowListModal
        isOpen={isOpenUpvotedBy}
        onClose={onCloseUpvotedBy}
        title={"Upvoted By"}
        list={upvotedBy}
      />
    </Flex>
  );
};

export { Comment };
