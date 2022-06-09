import { Box, useColorModeValue, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollToTop } from "./frontend/components";
import { getAllPosts, getAllUsers } from "./frontend/features";
import { Main } from "./frontend/layouts";

function App() {
  const toast = useToast();

  const { error: postsError } = useSelector((state) => state.posts);
  const { error: usersError } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (postsError !== "") {
      toast({
        title: postsError.title,
        description: postsError.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [postsError, toast]);

  useEffect(() => {
    if (usersError !== "") {
      toast({
        title: usersError.title,
        description: usersError.description,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [usersError, toast]);

  return (
    <Box bg={useColorModeValue("white", "gray.900")}>
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    </Box>
  );
}

export default App;
