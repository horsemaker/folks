import {
  Modal,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";

const OverlayModal = ({ isOpen, onClose, initialRef, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      isCentered
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("white", "gray.900")}>
        {children}
      </ModalContent>
    </Modal>
  );
};

export { OverlayModal };
