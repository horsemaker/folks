import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdAccountCircle,
  MdBookmarks,
  MdExplore,
  MdHome,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";

const LinkItems = [
  { name: "Feed", icon: MdHome, path: "/" },
  { name: "Explore", icon: MdExplore, path: "/explore" },
  { name: "Bookmarks", icon: MdBookmarks, path: "/bookmarks" },
  { name: "Profile", icon: MdAccountCircle, path: "/profile" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 72 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="6"
        mb="2"
        justifyContent="space-between"
      >
        <Flex as={Link} to="/" h="12" alignItems="center" gap={2}>
          <Image src="/assets/logos/folks-logo.svg" maxH="100%" />
          <Heading fontSize="3xl">folks</Heading>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex direction="column" gap={1}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

export { SidebarContent };
