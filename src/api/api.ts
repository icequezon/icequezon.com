import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:1337/api";
const API_KEY = process.env.REACT_APP_API_KEY || "";


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;

