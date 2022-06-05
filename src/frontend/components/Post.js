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
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import {
  MdBookmarkBorder,
  MdDelete,
  MdEdit,
  MdFavoriteBorder,
  MdMoreVert,
  MdOutlineInsertComment,
} from "react-icons/md";

const Post = ({ post }) => {
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
        name="Yash Ghodekar"
        src={"https://avatars.githubusercontent.com/u/60985700?v=4"}
        alt={"Author"}
      />
      <Flex direction={"column"} gap={"1"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
              <Text fontWeight={600}>Yash Ghodekar</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                @horsemaker
              </Text>
            </Flex>
            <Icon fontSize={"6"} color={"gray.500"} as={FaCircle} />
            <Text fontSize={"sm"} color={"gray.500"}>
              6h ago
            </Text>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<MdMoreVert />}
              variant="ghost"
              rounded={"full"}
            />
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem icon={<MdEdit />}>Edit Post</MenuItem>
              <MenuItem icon={<MdDelete />}>Delete Post</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>
          This is post {post}. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem ducimus debitis eum harum natus
          voluptatem dolor. Voluptate ut omnis at cumque magni. Sed accusantium
          ullam expedita iure dolorum saepe voluptate.
        </Text>
        <Flex alignItems={"center"} justifyContent={"space-between"} mt={"2"} mr={"3"}>
          <Flex alignItems={"center"} gap={"1"} color={"gray.500"}>
            <Icon fontSize={"20"} as={MdFavoriteBorder} />
            <Text fontSize={"smaller"}>4</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"1"} color={"gray.500"}>
            <Icon fontSize={"20"} as={MdOutlineInsertComment} />
            <Text fontSize={"smaller"}>4</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"1"} color={"gray.500"}>
            <Icon fontSize={"20"} as={MdBookmarkBorder} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Post };
