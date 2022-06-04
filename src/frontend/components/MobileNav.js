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
  VStack,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const MobileNav = ({ onOpen, ...rest }) => {
  const colorModeValue = useColorModeValue(true, false);

  return (
    <Flex
      ml={{ base: 0, md: 72 }}
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
                <Avatar size={"sm"} name="Yash Ghodekar" src="" />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Yash Ghodekar</Text>
                  <Text fontSize="xs" color="gray.600">
                    horsemaker
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
                to="/profile"
                _activeLink={{
                  background: colorModeValue ? "gray.300" : "whiteAlpha.300",
                }}
              >
                Profile
              </MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export { MobileNav };
