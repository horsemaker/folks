import axios from "axios";

const getUserService = async (username) => {
  const response = await axios.get(`/api/users/${username}`);
  return response;
};

export { getUserService };
