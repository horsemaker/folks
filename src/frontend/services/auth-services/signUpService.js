import axios from "axios";

const signUpService = async (user) => {
  const response = await axios.post("/api/auth/signup", user);
  return response;
};

export { signUpService };
