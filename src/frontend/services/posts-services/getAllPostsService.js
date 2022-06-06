import axios from "axios";

const getAllPostsService = async () => {
  const response = await axios.get("/api/posts");
  return response;
};

export { getAllPostsService };
