import axios from "axios";

const followUserService = async (followUserId, token) => {
  const response = await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
  return response;
};

export { followUserService };
