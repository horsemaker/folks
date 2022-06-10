import {
  Avatar,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ShowListContent = ({ title, list }) => {
  return (
    <Flex direction={"column"}>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex direction={"column"} gap={"4"}>
          {list.map(({ _id, firstName, lastName, avatarURL, username }) => (
            <Flex key={_id} gap={2}>
              <Avatar
                name={`${firstName} ${lastName}`}
                src={avatarURL}
                alt={username}
                as={Link}
                to={`/profile/${username}`}
                onClick={(e) => e.stopPropagation()}
              />
              <Flex
                direction={"column"}
                fontSize={"sm"}
                as={Link}
                to={`/profile/${username}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Text
                  fontWeight={600}
                  _hover={{ textDecoration: "underline" }}
                >{`${firstName} ${lastName}`}</Text>
                <Text color={"gray.500"}>@{username}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </ModalBody>
    </Flex>
  );
};

export { ShowListContent };
