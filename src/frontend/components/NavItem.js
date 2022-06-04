import { NavLink } from "react-router-dom";
import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";

const NavItem = ({ icon, children, path, ...rest }) => {
  const colorModeValue = useColorModeValue(true, false);

  return (
    <Link
      as={NavLink}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      {({ isActive }) =>
        isActive ? (
          <Flex
            align="center"
            py="3"
            px="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            bg={colorModeValue ? "purple.300" : "purple.700"}
            color={colorModeValue ? "black" : "white"}
            {...rest}
          >
            {icon && <Icon mr="6" fontSize="28" as={icon} />}
            <Text fontSize="larger">{children}</Text>
          </Flex>
        ) : (
          <Flex
            align="center"
            py="3"
            px="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: colorModeValue ? "purple.100" : "purple.900",
              color: colorModeValue ? "black" : "white",
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr="6"
                fontSize="28"
                _groupHover={{
                  color: colorModeValue ? "black" : "white",
                }}
                as={icon}
              />
            )}
            <Text fontSize="larger">{children}</Text>
          </Flex>
        )
      }
    </Link>
  );
};

export { NavItem };
