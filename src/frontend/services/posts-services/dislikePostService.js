import axios from "axios";

const dislikePostService = async (postId, token) => {
  const response = await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: token } }
  );
  return response;
};

export { dislikePostService };
