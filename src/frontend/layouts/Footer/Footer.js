import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { ListHeader, SocialButton } from "../../components";

const Footer = () => {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      p="4"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth="1px"
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ base: "1fr 1fr", xl: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Flex
                as={Link}
                to="/"
                h="12"
                alignItems="center"
                gap={2}
                _hover={{ textDecoration: "none" }}
              >
                <Image src="/assets/logos/folks-logo.svg" maxH="100%" />
                <Heading fontSize="3xl">folks</Heading>
              </Flex>
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Folks. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label="Instagram"
                path="https://www.instagram.com/horsemaker_/"
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label="Twitter"
                path="https://twitter.com/horsemaker_"
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton label="GitHub" path="https://github.com/horsemaker">
                <FaGithub />
              </SocialButton>
              <SocialButton
                label="LinkedIn"
                path="https://www.linkedin.com/in/yashghodekar/"
              >
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                colorScheme="purple"
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export { Footer };
