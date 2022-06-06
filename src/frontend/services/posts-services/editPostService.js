import axios from "axios";

const editPostService = async (postId, postData, token) => {
  const response = await axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    { headers: { authorization: token } }
  );
  return response;
};

export { editPostService };
