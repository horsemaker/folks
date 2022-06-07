import { Flex } from "@chakra-ui/react";
import { ProfileCard } from "./ProfileCard";
import { useSelector } from "react-redux";
import { giveSuggestedUsers } from "../utils";

const SuggestedProfiles = () => {
  const {
    user: { username, following },
  } = useSelector((state) => state.auth);
  const { data: users } = useSelector((state) => state.users);

  const suggestedUsers = giveSuggestedUsers(users, username, following);

  return (
    <Flex direction={"column"} gap={"4"}>
      {suggestedUsers.slice(0, 6).map((user) => (
        <ProfileCard key={user._id} user={user} />
      ))}
    </Flex>
  );
};

export { SuggestedProfiles };
