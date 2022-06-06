import axios from "axios";

const deletePostService = async (postId, token) => {
  const response = await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
  return response;
};

export { deletePostService };
