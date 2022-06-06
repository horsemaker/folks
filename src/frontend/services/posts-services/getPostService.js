import axios from "axios";

const getPostService = async (postId) => {
  const response = axios.get(`/api/posts/${postId}`);
  return response;
};

export { getPostService };
