import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../features";

const EditProfileContent = ({ onClose, initialRef, profile }) => {
  const toast = useToast();

  const [isEditing, setIsEditing] = useState(false);

  const { firstName, lastName, username, avatarURL, bio, website } = profile;

  const [userData, setUserData] = useState({
    firstName,
    lastName,
    username,
    avatarURL,
    bio,
    website,
  });

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setIsEditing(true);
    const response = await dispatch(editUser({ userData, token }));
    if (response?.payload?.user) {
      toast({
        title: "Profile Edited!",
        description: "Your profile has been edited succesfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsEditing(false);
    onClose();
  };

  return (
    <Flex direction={"column"} as={"form"} onSubmit={handleEditProfile}>
      <ModalHeader>Editing Profile</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Flex direction={"column"} gap={"4"}>
          <Flex direction={["column", "row"]} gap="2">
            <FormControl isRequired isReadOnly>
              <FormLabel htmlFor="firstName">First name</FormLabel>
              <Input
                id="firstName"
                ref={initialRef}
                type="text"
                placeholder="e.g. John"
                defaultValue={firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired isReadOnly>
              <FormLabel htmlFor="lastName">Last name</FormLabel>
              <Input
                id="lastName"
                type="text"
                placeholder="e.g. Doe"
                defaultValue={lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </FormControl>
          </Flex>
          <FormControl isRequired isReadOnly>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="e.g. horsemaker"
              defaultValue={username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </FormControl>
          <FormControl isReadOnly>
            <FormLabel htmlFor="avatarURL">Avatar URL</FormLabel>
            <Input
              id="avatarURL"
              type="text"
              placeholder="Aavatar URL..."
              defaultValue={avatarURL}
              onChange={(e) =>
                setUserData({ ...userData, avatarURL: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Input
              id="bio"
              type="text"
              placeholder="Write a bio for yourself..."
              defaultValue={bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="website">Website</FormLabel>
            <Input
              id="website"
              type="text"
              placeholder="Your website..."
              defaultValue={website}
              onChange={(e) =>
                setUserData({ ...userData, website: e.target.value })
              }
            />
          </FormControl>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Flex gap={"2"}>
          <Button colorScheme={"purple"} variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            isLoading={isEditing}
            colorScheme={"purple"}
            mr={3}
            type={"submit"}
          >
            Save
          </Button>
        </Flex>
      </ModalFooter>
    </Flex>
  );
};

export { EditProfileContent };
