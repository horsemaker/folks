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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useLocation, useNavigate } from "react-router-dom";
import { FOLKS_AUTH_USER_DATA, FOLKS_AUTH_USER_TOKEN } from "../../constants";
import { signin } from "../../features";

const SignInPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [signInMethod, setSignInMethod] = useState(null);

  const toast = useToast();

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = async (user) => {
    const response = await dispatch(signin(user));
    if (response?.payload?.encodedToken) {
      localStorage.setItem(
        FOLKS_AUTH_USER_TOKEN,
        response.payload.encodedToken
      );
      localStorage.setItem(
        FOLKS_AUTH_USER_DATA,
        JSON.stringify(response.payload.foundUser)
      );
      navigate(from, { replace: true });
      toast({
        title: "Signed In!",
        description: "You have successfully signed in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sign In Failed!",
        description: response.payload,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
        onSubmit={(e) => {
          e.preventDefault();
          setSignInMethod("Manual");
          handleSignIn(user);
        }}
      >
        <Heading fontSize="4xl">Sign In</Heading>
        <Flex direction="column" gap="2">
          <FormControl isRequired>
            <FormLabel htmlFor="email">Username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="e.g. horsemaker"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
          <Button
            isLoading={signInMethod === "Manual" && loading}
            colorScheme="purple"
            type="submit"
          >
            Sign In
          </Button>
          <Button
            isLoading={signInMethod === "Guest" && loading}
            colorScheme="purple"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              setSignInMethod("Guest");
              setUser({
                username: "horsemaker",
                password: "horsemaker123",
              });
              handleSignIn({
                username: "horsemaker",
                password: "horsemaker123",
              });
            }}
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
