import axios from "axios";

const { VITE_API_URL } = import.meta.env;
const usersPath = "/users";

/**
 * Users API
 */
const fetchUsers = async () => {
  const response = await axios.get(`${VITE_API_URL}${usersPath}`);

  return response.data;
};

export { fetchUsers };
