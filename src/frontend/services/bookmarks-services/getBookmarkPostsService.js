import axios from "axios";

const getBookmarkPostsService = async (token) => {
  const response = await axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
  return response;
};

export { getBookmarkPostsService };
