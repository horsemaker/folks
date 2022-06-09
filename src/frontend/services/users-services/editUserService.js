import axios from "axios";

const editUserService = async (userData, token) => {
  const response = axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: token } }
  );
  return response;
};

export { editUserService };
