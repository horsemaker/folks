import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
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

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex grow="1" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        gap="4"
        w="25rem"
        maxW="84vw"
        bg={useColorModeValue("gray.100", "gray.800")}
        px="5"
        py="4"
        rounded="lg"
      >
        <Heading fontSize="4xl">Sign Up</Heading>
        <Flex direction="column" gap="2">
          <Flex direction={["column", "row"]} gap="2">
            <FormControl isRequired>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input id="firstName" type="text" placeholder="e.g. John" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input id="lastName" type="text" placeholder="e.g. Doe" />
            </FormControl>
          </Flex>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="e.g. johndoe@gmail.com"
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
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
          <Button isLoading={false} colorScheme="purple">
            Sign Up
          </Button>
          <Flex gap="1">
            <Text>Existing User?</Text>
            <Link
              as={ReactLink}
              to="/signin"
              style={{ textDecoration: "none" }}
              pb="0.5px"
              borderBottom="1px"
            >
              Login here!
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { SignUpPage };
