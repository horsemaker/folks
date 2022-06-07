import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FOLKS_AUTH_USER_DATA, FOLKS_AUTH_USER_TOKEN } from "../constants";
import { signout } from "../features";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const MobileNav = ({ onOpen, ...rest }) => {
  const colorModeValue = useColorModeValue(true, false);
  const toast = useToast();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signout());
    localStorage.removeItem(FOLKS_AUTH_USER_TOKEN);
    localStorage.removeItem(FOLKS_AUTH_USER_DATA);
    toast({
      title: "Signed Out!",
      description: "You have signed out successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex
      ml={{ base: "0", md: "56", lg: "64", xl: "72" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex
        as={Link}
        to="/"
        display={{ base: "flex", md: "none" }}
        h="10"
        alignItems="center"
        gap={2}
      >
        <Image src="/assets/logos/folks-logo.svg" maxH="100%" />
        <Heading fontSize="2xl">folks</Heading>
      </Flex>

      <HStack spacing={{ base: "4", md: "6" }}>
        <ColorModeSwitcher />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  name={auth?.user?.firstName + auth?.user?.lastName}
                  src={auth.user?.avatarURL}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{`${auth?.user?.firstName} ${auth?.user?.lastName}`}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {auth?.user?.username}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem
                as={NavLink}
                to={`/profile/${auth?.user?.username}`}
                _activeLink={{
                  background: colorModeValue ? "gray.300" : "whiteAlpha.300",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export { MobileNav };
