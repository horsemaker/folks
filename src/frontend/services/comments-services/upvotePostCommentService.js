import axios from "axios";

const upvotePostCommentService = async (postId, commentId, token) => {
  const response = await axios.post(
    `/api/comments/upvote/${postId}/${commentId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
  return response;
};

export { upvotePostCommentService };
