import React from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileNav, SidebarContent } from "../../components";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box
          ml={{ base: "0", md: "56", lg: "64", xl: "72" }}
          px={{ base: "4", md: "6", lg: "8" }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export { SidebarWithHeader };
