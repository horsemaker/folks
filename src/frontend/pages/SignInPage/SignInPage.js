import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link as ReactLink } from "react-router-dom";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex grow="1" alignItems="center" justifyContent="center">
      <Flex
        as={"form"}
        direction="column"
        gap="4"
        w="25rem"
        maxW="84vw"
        bg={useColorModeValue("gray.100", "gray.800")}
        px="5"
        py="4"
        rounded="lg"
      >
        <Heading fontSize="4xl">Sign In</Heading>
        <Flex direction="column" gap="2">
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="e.g. johndoe@gmail.com"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                id="password"
                pr="3rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  rounded="md"
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Checkbox colorScheme="purple" defaultChecked>
            Remember Me
          </Checkbox>
          <Button isLoading={false} colorScheme="purple" type="submit">
            Sign In
          </Button>
          <Button
            isLoading={false}
            colorScheme="purple"
            variant="outline"
            type="submit"
          >
            Sign In as Guest
          </Button>
          <Flex gap="1">
            <Text>New here?</Text>
            <Link
              as={ReactLink}
              to="/signup"
              style={{ textDecoration: "none" }}
              pb="0.5px"
              borderBottom="1px"
            >
              Create an account!
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { SignInPage };
