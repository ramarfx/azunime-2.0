import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://azunime-api.test/api",
  headers: {
    Accept: "application/json",
  }
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
    
      if (response.status === 401) {
        localStorage.removeItem("access_token");
      }

    } catch (error) {
        console.log(error);
    }
    throw error;
  },
);

export default axiosClient;
