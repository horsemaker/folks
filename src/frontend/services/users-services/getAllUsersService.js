import axios from "axios";

const getAllUsersService = async () => {
  const response = await axios.get("/api/users");
  return response;
};

export { getAllUsersService };
