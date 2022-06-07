import axios from "axios";

const getAllUserPostsService = async (username) => {
  const response = await axios.get(`/api/posts/user/${username}`);
  return response;
};

export { getAllUserPostsService };
