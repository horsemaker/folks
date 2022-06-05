import { Flex } from "@chakra-ui/react";
import { ProfileCard } from "./ProfileCard";

const SuggestedProfiles = () => {
  return (
    <Flex direction={"column"} gap={"4"}>
      {[...Array(6).keys()].slice(1).map((profile) => (
        <ProfileCard key={profile} />
      ))}
    </Flex>
  );
};

export { SuggestedProfiles };
