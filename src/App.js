import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollToTop } from "./frontend/components";
import { getAllPosts, getAllUsers } from "./frontend/features";
import { Main } from "./frontend/layouts";

function App() {
  const toast = useToast();

  const { error: postsError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsError !== "" && postsError.isOnlyPostError) {
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
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    </div>
  );
}

export default App;
