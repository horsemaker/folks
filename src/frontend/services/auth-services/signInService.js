import axios from "axios";

const signInService = async (user) => {
  const response = await axios.post("/api/auth/login", user);
  return response;
};

export { signInService };
