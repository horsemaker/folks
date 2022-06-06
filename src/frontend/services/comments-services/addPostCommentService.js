import axios from "axios";

const addPostCommentService = async (postId, commentData, token) => {
  const response = await axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization: token } }
  );
  return response;
};

export { addPostCommentService };
