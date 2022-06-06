import axios from "axios";

const downvotePostCommentService = async (postId, commentId, token) => {
  const response = axios.post(
    `/api/comments/downvote/${postId}/${commentId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};

export { downvotePostCommentService };
