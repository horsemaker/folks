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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";

const SidebarContent = ({ onClose, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  const LinkItems = [
    { name: "Feed", icon: MdHome, path: "/" },
    { name: "Explore", icon: MdExplore, path: "/explore" },
    { name: "Bookmarks", icon: MdBookmarks, path: "/bookmarks" },
    {
      name: "Profile",
      icon: MdAccountCircle,
      path: `/profile/${auth?.user?.username}`,
    },
  ];

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "56", lg: "64", xl: "72" }}
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
          <NavItem
            key={link.name}
            icon={link.icon}
            path={link.path}
            onClick={onClose}
          >
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

export { SidebarContent };
