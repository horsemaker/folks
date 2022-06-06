import axios from "axios";

const likePostService = async (postId, token) => {
  const response = axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );
  return response;
};

export { likePostService };
