import axios from "axios";

const updateUserService = async (userData, token) => {
  const response = axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: token } }
  );
  return response;
};

export { updateUserService };
