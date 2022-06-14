import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = `${
  import.meta.env.VITE_BASE_URL
}/*`;

axios.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["token"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
