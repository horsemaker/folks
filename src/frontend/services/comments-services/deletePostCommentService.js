import axios from "axios";

const deletePostCommentService = async (postId, commentId, token) => {
  const response = await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: token } }
  );
  return response;
};

export { deletePostCommentService };
