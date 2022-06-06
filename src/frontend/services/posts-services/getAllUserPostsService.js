import axios from "axios";

const getAllUserPostsHandler = async (username) => {
  const response = await axios.get(`/api/posts/user/${username}`);
  return response;
};

export { getAllUserPostsHandler };
