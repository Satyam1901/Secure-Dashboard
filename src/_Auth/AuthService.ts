import axios from "axios";

const authService = {
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        credentials
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  signup: async (userData: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        userData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default authService;
