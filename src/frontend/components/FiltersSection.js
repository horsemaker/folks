import { Button, Flex, Select } from "@chakra-ui/react";
import { MdTrendingUp, MdSyncAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterShow, filterSortBy } from "../features";

const FiltersSection = () => {
  const { pathname } = useLocation();

  const { sortBy, show } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <Flex direction={{ base: "row", lg: "column" }} gap={"4"}>
      {pathname === "/explore" && (
        <>
          <Button
            flexBasis={{ base: "50%", lg: "unset" }}
            leftIcon={<MdTrendingUp />}
            colorScheme={"purple"}
            variant={show === "Trending" ? "solid" : "outline"}
            onClick={() => dispatch(filterShow("Trending"))}
          >
            Show Trending
          </Button>
          <Button
            flexBasis={{ base: "50%", lg: "unset" }}
            leftIcon={<MdSyncAlt />}
            colorScheme={"purple"}
            variant={show === "Latest" ? "solid" : "outline"}
            onClick={() => dispatch(filterShow("Latest"))}
          >
            Show Latest
          </Button>
        </>
      )}
      {pathname === "/" && (
        <Select
          value={sortBy}
          onChange={(e) => dispatch(filterSortBy(e.target.value))}
        >
          <option value={"New to Old"}>New to Old</option>
          <option value={"Old to New"}>Old to New</option>
        </Select>
      )}
    </Flex>
  );
};

export { FiltersSection };
