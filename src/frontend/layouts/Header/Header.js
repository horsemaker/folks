import {
  Flex,
  Button,
  Stack,
  useColorModeValue,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "../../components";

const Header = () => {
  return (
    <Flex
      direction="column"
      bg={useColorModeValue("white", "gray.900")}
      minH="100vh"
    >
      <Flex
        h="20"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        align={"center"}
      >
        <Flex
          as={Link}
          to="/"
          flex={{ md: 1 }}
          justify={{ base: "center", md: "start" }}
          h="12"
          alignItems="center"
          gap={2}
        >
          <Image src="/assets/logos/folks-logo.svg" maxH="100%" />
          <Heading fontSize="3xl">folks</Heading>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={4}
        >
          <ColorModeSwitcher />
          <Button as={Link} to="/signin" variant="ghost" colorScheme="purple">
            Sign In
          </Button>
          <Button
            as={Link}
            to="/signup"
            display={{ base: "none", md: "inline-flex" }}
            colorScheme="purple"
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
      <Outlet />
    </Flex>
  );
};

export { Header };
