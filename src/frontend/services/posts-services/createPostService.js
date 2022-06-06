import axios from "axios";

const createPostService = async (postData, token) => {
  const response = await axios.post(
    "/api/posts",
    { postData },
    { headers: { authorization: token } }
  );
  return response;
};

export { createPostService };
