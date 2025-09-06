import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Change to your backend URL

const useApi = () => {
  const get = async (endpoint) => {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  };

  const post = async (endpoint, payload) => {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload);
    return response.data;
  };

  return { get, post };
};

export default useApi;
