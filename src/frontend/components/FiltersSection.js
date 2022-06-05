import { Button, Flex, Select } from "@chakra-ui/react";
import { MdTrendingUp } from "react-icons/md";

const FiltersSection = () => {
  return (
    <Flex direction={{ base: "row", lg: "column" }} gap={"4"}>
      <Button
        flexBasis={{ base: "50%", lg: "unset" }}
        leftIcon={<MdTrendingUp />}
        colorScheme={"purple"}
      >
        Show Trending
      </Button>
      <Select
        flexBasis={{ base: "50%", lg: "unset" }}
      >
        <option value={"New to Old"}>New to Old</option>
        <option value={"Old to New"}>Old to New</option>
      </Select>
    </Flex>
  );
};

export { FiltersSection };
