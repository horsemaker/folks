import axios from "axios";

const getPostCommentsService = async (postId) => {
  const response = await axios.get(`/api/comments/${postId}`);
  return response;
};

export { getPostCommentsService };
